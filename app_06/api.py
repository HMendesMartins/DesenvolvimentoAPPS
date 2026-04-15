from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
alunos = [
    {"id": 1,"nome": "Haroldo pé de Bunda","média": 5.0},
    {"id": 2,"nome": "Harolda pé de Tronco","média": 6.0},
    {"id": 3,"nome": "Barba Rosa","média": 7.0},
]
@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)
app.run(port=1000, debug=True)