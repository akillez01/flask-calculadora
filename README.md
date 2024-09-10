# Calculadora em Flask

Este projeto é uma aplicação web simples de calculadora criada usando Flask, HTML, CSS e JavaScript. O objetivo é fornecer uma interface interativa semelhante a uma calculadora real.

## Funcionalidades

- Operações matemáticas básicas: adição, subtração, multiplicação e divisão.
- Interface responsiva.
- Layout semelhante a uma calculadora física.

## Estrutura do Projeto

```
flask-calculadora/
│
├── app.py                 
├── venv/                  
├── templates/             
│   └── index.html         
└── static/                
    ├── script.js         
    └── styles.css        
```

## Pré-requisitos

Antes de iniciar o projeto, você precisa ter o seguinte instalado em sua máquina:

- Python 3.x
- Git

### Dependências

As dependências estão descritas no arquivo `requirements.txt`. As principais bibliotecas usadas são:

- Flask

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório:**

```bash
git clone https://github.com/SEU_USUARIO/flask-calculadora.git
cd flask-calculadora
```

2. **Crie e ative o ambiente virtual:**

```bash
python3 -m venv venv
source venv/bin/activate  # No Linux/Mac
# ou
venv\Scripts\activate  # No Windows
```

3. **Instale as dependências:**

```bash
pip install -r requirements.txt
```

4. **Execute o servidor Flask:**

```bash
flask run
```

5. **Acesse a aplicação:**

Abra o navegador e vá para [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Subindo para o GitHub

Se você deseja enviar este projeto para o GitHub, siga os passos abaixo:

1. **Inicialize o repositório Git:**

```bash
git init
git add .
git commit -m "Primeiro commit - calculadora Flask"
```

2. **Crie um repositório no GitHub** (Siga as instruções no site).

3. **Adicione o repositório remoto e envie os arquivos:**

```bash
git remote add origin https://github.com/SEU_USUARIO/flask-calculadora.git
git branch -M main
git push -u origin main
```

## Deploy em uma instância EC2 da AWS

Se você deseja fazer o deploy dessa aplicação em uma instância EC2, siga os passos abaixo:

1. **Crie e configure uma instância EC2** com a distribuição Linux (como Amazon Linux ou Ubuntu).

2. **Conecte-se à sua instância via SSH:**

```bash
ssh -i "SEU_ARQUIVO.pem" ec2-user@SEU-ENDEREÇO-EC2
```

3. **Instale as dependências necessárias (Python, Git, etc.) na EC2:**

```bash
sudo yum update -y
sudo yum install python3 git -y
```

4. **Clone o repositório na EC2:**

```bash
git clone https://github.com/SEU_USUARIO/flask-calculadora.git
cd flask-calculadora
```

5. **Configure o ambiente virtual e instale as dependências:**

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

6. **Execute o Flask na EC2 (tornando-o acessível publicamente):**

```bash
flask run --host=0.0.0.0
```

7. **Configure o Grupo de Segurança da EC2** para permitir o tráfego na porta 5000.

Agora, você pode acessar a aplicação pela URL pública da instância EC2.

## Autor

- **Achilles Souza**

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
