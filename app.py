from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key = "portfolio_secret"

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form["name"]
    email = request.form["email"]
    subject = request.form["subject"]
    message = request.form["message"]

    print(name)
    print(email)
    print(subject)
    print(message)

    flash("Message sent successfully!")

    return redirect("/")

from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key = "portfolio_secret"

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form["name"]
    email = request.form["email"]
    subject = request.form["subject"]
    message = request.form["message"]

    print(name)
    print(email)
    print(subject)
    print(message)

    flash("Message sent successfully!")

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)