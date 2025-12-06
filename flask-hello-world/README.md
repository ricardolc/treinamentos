1. Crie o ambiente virtual e instale o Flask 
Crie um diretório para o projeto: mkdir meu_app_flask e entre nele: cd meu_app_flask.
Crie um ambiente virtual: 

>>>>  python3 -m venv venv

Ative o ambiente virtual:
Windows: .\venv\Scripts\activate.
Linux/macOS: 

>>>>  source venv/bin/activate

Instale o Flask: 
>>>> pip install Flask
2. Crie o arquivo do aplicativo (app.py) 
Crie um arquivo chamado app.py no diretório do projeto.
Adicione o seguinte código ao app.py:

3. Execute o aplicativo
No terminal, dentro do diretório do projeto, digite o comando para rodar o servidor Flask: 
>>>>  python3 -m flask run
Abra o navegador e acesse http://127.0.0.1:5000/. Você deverá ver a mensagem "Hello, World!". 
Pressione Ctrl+C no terminal para parar o servidor. 