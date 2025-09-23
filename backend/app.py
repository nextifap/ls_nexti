from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)

DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1372647224185454663/51VsWzP2bl6ZyHceDtsDo0yJ7EwHFN6FkdhKCKKw6gURX9fDLvrBzY3v4yEeZYg8lNte'

@app.route('/reportar', methods=['POST'])
def reportar_bug():
    data = request.get_json()
    nome = data.get('nome')
    descricao = data.get('descricao')

    if not nome or not descricao:
        return jsonify({'error': 'Nome e descrição são obrigatórios'}), 400

    payload = {
        "embeds": [
            {
                "title": "🛠️ Novo report de bug",
                "color": 0x0000FF, 
                "fields": [
                    {
                        "name": "Nome",
                        "value": f"`{nome}`",	
                        "inline": True
                    },
                    {
                        "name": "Descrição",
                        "value": f"`{descricao}`",
                        "inline": False
                    }
                ],
                "timestamp": datetime.utcnow().isoformat()
            }
        ]
    }

    response = requests.post(DISCORD_WEBHOOK_URL, json=payload)

    if response.status_code == 204:
        return jsonify({'status': 'Mensagem enviada com sucesso'}), 200
    else:
        return jsonify({'error': 'Falha ao enviar mensagem para o Discord'}), 500

if __name__ == '__main__':
    app.run(debug=True)
