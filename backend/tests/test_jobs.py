import pytest
from app import create_app, db
from app.models import Job

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'  # In-memory DB for testing

    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client

        # Teardown
        with app.app_context():
            db.drop_all()

def test_post_job(client):
    response = client.post('/jobs', json={
        "title": "Backend Developer",
        "description": "Build APIs for our platform.",
        "category": "Software Development",
        "user_id": 1
    })
    assert response.status_code == 201
    assert response.get_json()['message'] == "Job posted successfully!"

def test_fetch_jobs(client):
    # Prepopulate a job
    job = Job(title="Frontend Developer", description="React.js expert needed.", category="Web", user_id=1)
    with client.application.app_context():
        db.session.add(job)
        db.session.commit()

    response = client.get('/jobs')
    assert response.status_code == 200
    jobs = response.get_json()
    assert len(jobs) == 1
    assert jobs[0]['title'] == "Frontend Developer"