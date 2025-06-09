from flask import Flask , render_template , request , url_for , redirect
app = Flask(__name__)


@app.route("/home")
def home():
  return  render_template("home.html")


@app.route("/work")
def work():
  return  render_template("work.html")


@app.route('/about')
def about():
  return render_template('about.html')


@app.route('/blog')
def blog():
  return render_template('blog.html')

if __name__ ==  "main":
  app.run(host='0.0.0' , port=8080)
