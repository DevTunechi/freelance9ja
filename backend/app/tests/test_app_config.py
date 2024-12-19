def test_app_is_testing(client):
    """Test that the app is in testing mode."""
    response = client.get('/')
    assert response.status_code == 404  # Assuming no route is defined at `/`
    assert client.application.config['TESTING'] is True

def test_database_configuration(client):
    """Test that the database is configured correctly."""
    assert 'sqlite:///:memory:' in client.application.config['SQLALCHEMY_DATABASE_URI']