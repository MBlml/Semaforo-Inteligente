from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('admin.html')

@app.route('/reset_password')
def reset_password():
    return render_template('resetPassword.html')