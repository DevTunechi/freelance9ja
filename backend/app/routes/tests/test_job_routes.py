from app.models import Job, db

def test_post_job(client):
    """Test posting a job via the API."""
    response = client.post('/jobs', json={
        "title": "Backend Developer",
        "description": "Develop APIs",
        "category": "Software",
        "user_id": 1
    })
    assert response.status_code == 201
    assert response.get_json()['message'] == "Job posted successfully!"

def test_fetch_jobs(client):
    """Test fetching all jobs via the API."""
    # Add a job to the database
    job = Job(title="Frontend Developer", description="Build UI", category="Web", user_id=1)
    with client.application.app_context():
        db.session.add(job)
        db.session.commit()

    response = client.get('/jobs')
    assert response.status_code == 200
    jobs = response.get_json()
    assert len(jobs) == 1
    assert jobs[0]['title'] == "Frontend Developer"

def test_post_job_missing_data(client):
    """Test posting a job with missing data."""
    response = client.post('/jobs', json={})
    assert response.status_code == 400
    assert 'error' in response.get_json()