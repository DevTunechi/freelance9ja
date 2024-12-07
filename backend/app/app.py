from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return {"message": "Welcome to Freelance 9ja!"}

if __name__ == "__main__":
    app.run(debug=True)

