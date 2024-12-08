from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask and SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///freelance9ja.db'  # Use SQLite for simplicity
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Models
class Job(db.Model):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "user_id": self.user_id
        }

# Routes
@app.route('/jobs', methods=['POST'])
def post_job():
    data = request.get_json()
    new_job = Job(
        title=data['title'],
        description=data['description'],
        category=data['category'],
        user_id=data['user_id']
    )
    
    db.session.add(new_job)
    db.session.commit()
    return jsonify({"message": "Job posted successfully!"}), 201

@app.route('/jobs', methods=['GET'])
def fetch_jobs():
    jobs = Job.query.all()
    return jsonify([job.serialize() for job in jobs])

# Main
if __name__ == '__main__':
    # Create tables if not exist
    with app.app_context():
        db.create_all()
    app.run(debug=True)
