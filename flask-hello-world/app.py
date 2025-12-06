from flask import Flask

# Cria uma instância da aplicação Flask
app = Flask(__name__)

# Define uma rota para a página inicial (/)
@app.route('/')
def hello():
    # Retorna a mensagem "Hello, World!"
    return 'Hello, World!'

# Executa o servidor de desenvolvimento quando o script é executado
if __name__ == '__main__':
    app.run(debug=True)