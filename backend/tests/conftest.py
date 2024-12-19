import pytest
from app import create_app, db

@pytest.fixture
def client():
    """Set up a test client with an in-memory database."""
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client

        # Teardown
        with app.app_context():
            db.drop_all()