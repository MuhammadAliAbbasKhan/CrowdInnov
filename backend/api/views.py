import os
import json
import uuid
from django.shortcuts import render
from django.contrib import messages
from django.utils import timezone
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Challenge, SolverSubmission, UserSubscription, ContactInquiry, NewsletterSubscriber, TrialRequest
from .db_mongo import (
    sync_challenge_to_mongodb,
    sync_submission_to_mongodb,
    sync_inquiry_to_mongodb,
    sync_newsletter_to_mongodb,
    sync_subscription_to_mongodb
)

ADMIN_PASSCODE = os.environ.get('ADMIN_PASSCODE', 'aliabbas1234578!')

def extract_django_messages(request, default_level='info', fallback_msg=None):
    msg_list = []
    storage = messages.get_messages(request)
    for msg in storage:
        level_tag = msg.level_tag or default_level
        if level_tag == 'danger': level_tag = 'error'
        msg_list.append({'level': level_tag, 'message': str(msg)})
    if not msg_list and fallback_msg:
        msg_list.append({'level': default_level, 'message': fallback_msg})
    return msg_list

def verify_admin_access(request):
    passcode = request.headers.get('X-Admin-Passcode') or request.META.get('HTTP_X_ADMIN_PASSCODE')
    return passcode == ADMIN_PASSCODE

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def challenges_list_create(request):
    if request.method == 'GET':
        category = request.GET.get('category')
        phase = request.GET.get('phase')
        search = request.GET.get('search')

        qs = Challenge.objects.all().order_by('-created_at')
        if category and category != 'all':
            qs = qs.filter(category__iexact=category)
        if phase and phase != 'all':
            qs = qs.filter(phase__iexact=phase)
        if search:
            qs = qs.filter(title__icontains=search) | qs.filter(summary__icontains=search)

        data = []
        for ch in qs:
            data.append({
                'id': ch.id,
                'title': ch.title,
                'slug': ch.slug,
                'sponsor_name': ch.sponsor_name,
                'sponsor_logo': ch.sponsor_logo,
                'category': ch.category,
                'prize_amount': float(ch.prize_amount),
                'currency': ch.currency,
                'summary': ch.summary,
                'description': ch.description,
                'phase': ch.phase,
                'deadline': ch.deadline.isoformat() if ch.deadline else None,
                'submissions_count': ch.submissions_count,
                'solvers_count': ch.solvers_count,
                'tags': ch.tags.split(',') if ch.tags else [],
                'featured': ch.featured,
            })
        return Response({'challenges': data}, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        payload = request.data
        title = payload.get('title')
        if not title:
            return Response({'error': 'Title is required'}, status=status.HTTP_400_BAD_REQUEST)

        slug = title.lower().replace(' ', '-').replace('/', '-') + f"-{uuid.uuid4().hex[:6]}"
        ch = Challenge.objects.create(
            title=title,
            slug=slug,
            sponsor_name=payload.get('sponsor_name', 'CrowdInnov Sponsor'),
            category=payload.get('category', 'Technology'),
            prize_amount=payload.get('prize_amount', 25000),
            summary=payload.get('summary', ''),
            description=payload.get('description', ''),
            phase='submission',
            deadline=timezone.now() + timezone.timedelta(days=60),
            tags=payload.get('tags', 'Innovation, Crowdsourcing'),
            featured=payload.get('featured', False)
        )

        sync_challenge_to_mongodb({
            'title': ch.title,
            'slug': ch.slug,
            'sponsor_name': ch.sponsor_name,
            'prize_amount': float(ch.prize_amount),
            'phase': ch.phase,
        })

        return Response({
            'message': 'Challenge created successfully',
            'challenge_id': ch.id,
            'slug': ch.slug
        }, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([AllowAny])
def challenge_detail(request, challenge_id):
    try:
        ch = Challenge.objects.get(id=challenge_id)
        data = {
            'id': ch.id,
            'title': ch.title,
            'slug': ch.slug,
            'sponsor_name': ch.sponsor_name,
            'sponsor_logo': ch.sponsor_logo,
            'category': ch.category,
            'prize_amount': float(ch.prize_amount),
            'currency': ch.currency,
            'summary': ch.summary,
            'description': ch.description,
            'phase': ch.phase,
            'deadline': ch.deadline.isoformat() if ch.deadline else None,
            'submissions_count': ch.submissions_count,
            'solvers_count': ch.solvers_count,
            'tags': ch.tags.split(',') if ch.tags else [],
            'featured': ch.featured,
        }
        return Response(data, status=status.HTTP_200_OK)
    except Challenge.DoesNotExist:
        return Response({'error': 'Challenge not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_entry(request, challenge_id):
    try:
        ch = Challenge.objects.get(id=challenge_id)
    except Challenge.DoesNotExist:
        return Response({'error': 'Challenge not found'}, status=status.HTTP_404_NOT_FOUND)

    payload = request.data
    solver_name = payload.get('solver_name')
    solver_email = payload.get('solver_email')
    project_title = payload.get('project_title')
    abstract_summary = payload.get('abstract_summary')

    if not all([solver_name, solver_email, project_title, abstract_summary]):
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    sub = SolverSubmission.objects.create(
        challenge=ch,
        solver_name=solver_name,
        solver_email=solver_email,
        project_title=project_title,
        abstract_summary=abstract_summary,
        attachment_url=payload.get('attachment_url', '')
    )

    ch.submissions_count += 1
    ch.save()

    sync_submission_to_mongodb({
        'challenge_id': ch.id,
        'challenge_title': ch.title,
        'solver_name': solver_name,
        'solver_email': solver_email,
        'project_title': project_title,
        'submitted_at': timezone.now().isoformat()
    })

    return Response({
        'status': 'success',
        'message': 'Your challenge submission has been received and logged!',
        'submission_id': sub.id
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def subscribe_newsletter(request):
    email = request.data.get('email')
    if not email:
        return Response({'error': 'Email address required'}, status=status.HTTP_400_BAD_REQUEST)

    sub, created = NewsletterSubscriber.objects.get_or_create(email=email)
    sync_newsletter_to_mongodb({
        'email': email,
        'subscribed_at': timezone.now().isoformat()
    })
    return Response({
        'status': 'success',
        'message': 'Subscribed to CrowdInnov project alerts!'
    }, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def contact_inquiry(request):
    payload = request.data
    name = payload.get('name')
    email = payload.get('email')
    subject = payload.get('subject', 'General Inquiry')
    message = payload.get('message')

    if not all([name, email, message]):
        return Response({'error': 'Name, email, and message are required'}, status=status.HTTP_400_BAD_REQUEST)

    inquiry = ContactInquiry.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message
    )

    sync_inquiry_to_mongodb({
        'name': name,
        'email': email,
        'subject': subject,
        'message': message,
        'created_at': timezone.now().isoformat()
    })

    return Response({
        'status': 'success',
        'message': 'Thank you! Your message has been sent to CrowdInnov support.'
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def create_payment_intent(request):
    plan_tier = request.data.get('plan_tier', 'sponsor_basic')
    amount_map = {
        'sponsor_basic': 49900,  # $499.00
        'sponsor_enterprise': 149900, # $1,499.00
        'pro_solver': 2900 # $29.00
    }
    amount = amount_map.get(plan_tier, 49900)
    intent_id = f"pi_crowdinnov_{uuid.uuid4().hex[:12]}"
    client_secret = f"{intent_id}_secret_{uuid.uuid4().hex[:8]}"

    return Response({
        'clientSecret': client_secret,
        'intentId': intent_id,
        'amount': amount / 100,
        'currency': 'usd'
    }, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def user_subscription_subscribe(request):
    payload = request.data
    email = payload.get('email', 'user@crowdinnov.org')
    username = payload.get('username', email.split('@')[0])
    plan_tier = payload.get('plan_tier', 'premium_solver')
    payment_ref = payload.get('payment_reference', f"STRIPE-CROWDINNOV-{uuid.uuid4().hex[:6].upper()}")

    sub, created = UserSubscription.objects.update_or_create(
        email=email,
        defaults={
            'username': username,
            'plan_tier': plan_tier,
            'is_active': True,
            'payment_reference': payment_ref
        }
    )

    sync_subscription_to_mongodb({
        'email': email,
        'username': username,
        'plan_tier': plan_tier,
        'is_active': True,
        'payment_reference': payment_ref,
        'updated_at': timezone.now().isoformat()
    })

    return Response({
        'status': 'success',
        'is_paid': True,
        'subscription': {
            'email': sub.email,
            'plan_tier': sub.plan_tier,
            'is_active': sub.is_active,
            'payment_reference': sub.payment_reference
        }
    }, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def admin_analytics(request):
    if not verify_admin_access(request):
        return Response({'error': 'Unauthorized admin passcode required'}, status=status.HTTP_403_FORBIDDEN)

    total_challenges = Challenge.objects.count()
    total_submissions = SolverSubmission.objects.count()
    total_inquiries = ContactInquiry.objects.count()
    total_newsletter = NewsletterSubscriber.objects.count()

    return Response({
        'platform': 'CrowdInnov.org',
        'status': 'Operational',
        'metrics': {
            'total_challenges': total_challenges,
            'total_submissions': total_submissions,
            'total_inquiries': total_inquiries,
            'total_newsletter': total_newsletter,
            'total_disbursed_prizes': 52450000.00,
            'active_solvers_global': 485000
        },
        'db_sync': {
            'sqlite': 'Connected',
            'mongodb_atlas': 'Synced'
        }
    }, status=status.HTTP_200_OK)
