from django.urls import path
from . import views

urlpatterns = [
    path('challenges/', views.challenges_list_create, name='challenges_list_create'),
    path('challenges/<int:challenge_id>/', views.challenge_detail, name='challenge_detail'),
    path('challenges/<int:challenge_id>/submit/', views.submit_entry, name='submit_entry'),
    path('newsletter/', views.subscribe_newsletter, name='subscribe_newsletter'),
    path('inquiries/', views.contact_inquiry, name='contact_inquiry'),
    path('stripe/create-payment-intent/', views.create_payment_intent, name='create_payment_intent'),
    path('subscriptions/subscribe/', views.user_subscription_subscribe, name='user_subscription_subscribe'),
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
