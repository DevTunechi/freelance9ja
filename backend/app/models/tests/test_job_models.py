import pytest
from app.models import Job, db

def test_job_model_creation():
    """Test the creation of a Job model instance."""
    job = Job(title="Backend Developer", description="Develop APIs", category="Software", user_id=1)
    assert job.title == "Backend Developer"
    assert job.description == "Develop APIs"
    assert job.category == "Software"
    assert job.user_id == 1

def test_job_model_persistence(client):
    """Test saving a Job instance to the database."""
    job = Job(title="Frontend Developer", description="Build UI", category="Web", user_id=1)
    with client.application.app_context():
        db.session.add(job)
        db.session.commit()
        saved_job = Job.query.first()
        assert saved_job.title == "Frontend Developer"