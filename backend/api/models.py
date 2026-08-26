from django.db import models
from django.utils import timezone

class Challenge(models.Model):
    PHASE_CHOICES = [
        ('submission', 'Submission Phase'),
        ('judging', 'Judging Phase'),
        ('completed', 'Completed / Awarded'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    sponsor_name = models.CharField(max_length=150)
    sponsor_logo = models.CharField(max_length=255, blank=True, null=True)
    category = models.CharField(max_length=100)
    prize_amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=10, default='USD')
    summary = models.TextField()
    description = models.TextField()
    phase = models.CharField(max_length=20, choices=PHASE_CHOICES, default='submission')
    deadline = models.DateTimeField()
    submissions_count = models.IntegerField(default=0)
    solvers_count = models.IntegerField(default=0)
    tags = models.CharField(max_length=255, help_text="Comma separated tags", blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class SolverSubmission(models.Model):
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE, related_name='submissions')
    solver_name = models.CharField(max_length=150)
    solver_email = models.EmailField()
    project_title = models.CharField(max_length=255)
    abstract_summary = models.TextField()
    attachment_url = models.URLField(blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.project_title} by {self.solver_name}"

class UserSubscription(models.Model):
    PLAN_TIERS = [
        ('free', 'Free Innovator'),
        ('pro', 'Pro Solver'),
        ('sponsor_basic', 'Sponsor Basic'),
        ('sponsor_enterprise', 'Sponsor Enterprise'),
    ]
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    plan_tier = models.CharField(max_length=30, choices=PLAN_TIERS, default='free')
    is_active = models.BooleanField(default=True)
    stripe_customer_id = models.CharField(max_length=100, blank=True, null=True)
    payment_reference = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.plan_tier}"

class TrialRequest(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    organization = models.CharField(max_length=200)
    challenge_scope = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class ContactInquiry(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
