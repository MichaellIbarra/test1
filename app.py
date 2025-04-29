from flask import Flask, render_template
from flask_tailwind import Tailwind

# inicializacion de mi framework flask
app = Flask(__name__)
Tailwind = Tailwind(app)


# programar mis rutas
@app.route("/")
def index():
    return render_template("index.html")


# ejecutar mi servidor
if __name__ == "__main__":
    app.run(debug=True)
