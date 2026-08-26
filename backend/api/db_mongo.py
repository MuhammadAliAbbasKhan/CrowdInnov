import os
import logging
from pymongo import MongoClient

logger = logging.getLogger(__name__)

MONGODB_URI = os.environ.get('MONGODB_URI', 'mongodb+srv://crowdinnov_user:crowdinnov_password@cluster0.mongodb.net/crowdinnov_db?retryWrites=true&w=majority')

def get_mongo_db():
    try:
        client = MongoClient(MONGODB_URI, serverSelectionTimeoutMS=2000)
        db = client['crowdinnov_db']
        return db
    except Exception as e:
        logger.warning(f"MongoDB Cloud connection deferred: {str(e)}")
        return None

def sync_challenge_to_mongodb(challenge_data):
    db = get_mongo_db()
    if db is not None:
        try:
            db['crowdinnov_challenges'].update_one(
                {'slug': challenge_data.get('slug')},
                {'$set': challenge_data},
                upsert=True
            )
        except Exception as e:
            logger.error(f"MongoDB sync error for challenge: {e}")

def sync_submission_to_mongodb(submission_data):
    db = get_mongo_db()
    if db is not None:
        try:
            db['crowdinnov_submissions'].insert_one(submission_data)
        except Exception as e:
            logger.error(f"MongoDB sync error for submission: {e}")

def sync_inquiry_to_mongodb(inquiry_data):
    db = get_mongo_db()
    if db is not None:
        try:
            db['crowdinnov_inquiries'].insert_one(inquiry_data)
        except Exception as e:
            logger.error(f"MongoDB sync error for inquiry: {e}")

def sync_newsletter_to_mongodb(newsletter_data):
    db = get_mongo_db()
    if db is not None:
        try:
            db['crowdinnov_newsletters'].update_one(
                {'email': newsletter_data.get('email')},
                {'$set': newsletter_data},
                upsert=True
            )
        except Exception as e:
            logger.error(f"MongoDB sync error for newsletter: {e}")

def sync_subscription_to_mongodb(subscription_data):
    db = get_mongo_db()
    if db is not None:
        try:
            db['crowdinnov_subscriptions'].update_one(
                {'email': subscription_data.get('email')},
                {'$set': subscription_data},
                upsert=True
            )
        except Exception as e:
            logger.error(f"MongoDB sync error for subscription: {e}")

