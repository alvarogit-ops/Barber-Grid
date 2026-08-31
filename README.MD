# 💈 Barber Grid

Sistema web para gestão de estabelecimentos de estética masculina, desenvolvido com o objetivo de auxiliar no gerenciamento de clientes, serviços e agendamentos.

O Barber Grid busca facilitar a organização de uma barbearia, permitindo o controle de informações importantes do estabelecimento e reduzindo conflitos relacionados aos horários de atendimento.

---

## 📋 Sobre o projeto

O **Barber Grid** é um sistema de gestão para barbearias desenvolvido como projeto acadêmico.

A proposta do sistema é oferecer recursos para auxiliar no gerenciamento de uma barbearia, principalmente em atividades relacionadas ao cadastro de clientes, serviços e agendamentos.

O sistema está sendo desenvolvido utilizando o framework **Django**, seguindo o padrão arquitetural **MVT (Model-View-Template)**.

---

## 🎯 Problema

O gerenciamento manual de agendamentos pode gerar problemas como:

- conflitos entre horários;
- dificuldade no controle dos clientes;
- dificuldade na organização dos serviços oferecidos;
- falta de centralização das informações;
- dificuldade no acompanhamento dos agendamentos.

O Barber Grid busca contribuir para a organização dessas informações em um sistema web.

---

## 🚀 Funcionalidades

Entre as funcionalidades previstas para o sistema estão:

- [x] Cadastro de clientes;
- [x] Cadastro de serviços;
- [x] Cadastro de barbeiros;
- [x] Sistema de agendamentos;
- [x] Controle do status dos agendamentos;
- [ ] Autenticação de usuários;
- [ ] Área de gerenciamento da barbearia;
- [ ] Prevenção de conflitos de horários;
- [ ] Integração e melhorias futuras.

> As funcionalidades poderão ser alteradas ou expandidas durante o desenvolvimento do projeto.

---

## 👥 Usuários do sistema

O sistema possui como principais usuários:

### Cliente

O cliente poderá utilizar o sistema para visualizar informações e realizar agendamentos de serviços.

### Barbeiro / Administrador

O responsável pela barbearia poderá gerenciar informações relacionadas aos clientes, serviços e agendamentos.

---

## 🛠️ Tecnologias utilizadas

O Barber Grid utiliza as seguintes tecnologias:

- Python
- Django
- HTML
- CSS
- Bootstrap
- JavaScript
- SQLite
- Git
- GitHub

---

## 🏗️ Arquitetura

O sistema é desenvolvido utilizando o padrão **MVT (Model-View-Template)**, utilizado pelo Django.

A organização principal é dividida em:

- **Model:** responsável pela estrutura e manipulação dos dados;
- **View:** responsável pela lógica da aplicação;
- **Template:** responsável pela apresentação das páginas ao usuário.

---

## 📁 Estrutura do projeto

```text
barber-grid/
│
├── .github/
│   └── ISSUE_TEMPLATE/
│
├── docs/
│   ├── README.md
│   ├── diagramas/
│   │   └── README.md
│   │
│   └── prototipos/
│       └── README.md
│
├── config/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── ...
│
├── barber/
│   └── ...
│
├── static/
│
├── templates/
│
├── .env.example
├── .gitignore
├── manage.py
├── README.md
└── requirements.txt
````

A estrutura do repositório segue a organização recomendada para os projetos da disciplina, incluindo diretórios para documentação, protótipos, diagramas e configurações do projeto Django. ([Fnanda IFRN][1])

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/alvarogit-ops/barber-management-system-grid.git
```

Entre na pasta do projeto:

```bash
cd barber-grid
```

---

### 2. Crie um ambiente virtual

No Windows:

```bash
python -m venv venv
```

Ative o ambiente virtual:

```bash
venv\Scripts\activate
```

No Linux ou macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3. Instale as dependências

```bash
pip install -r requirements.txt
```

---

### 4. Configure as variáveis de ambiente

Crie um arquivo chamado `.env` com base no arquivo `.env.example`.

Exemplo:

```text
SECRET_KEY=sua_chave_secreta_aqui
DEBUG=True
```

> O arquivo `.env` não deve ser enviado para o repositório, pois pode conter informações sensíveis.

---

### 5. Execute as migrações

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

---

### 6. Inicie o servidor

```bash
python manage.py runserver
```

Após iniciar o servidor, acesse:

```text
http://127.0.0.1:8000/
```

---

## 🗃️ Modelos principais

O sistema possui modelos relacionados ao gerenciamento de uma barbearia.

### Cliente

Representa os clientes cadastrados no sistema.

### Barbeiro

Representa os profissionais responsáveis pelos atendimentos.

### Serviço

Representa os serviços oferecidos pela barbearia.

Exemplos:

* Corte de cabelo;
* Barba;
* Corte e barba.

### Agendamento

Representa os horários agendados pelos clientes.

Um agendamento pode possuir informações como:

* cliente;
* serviço;
* data;
* horário;
* status.

---

## 📊 Status dos agendamentos

Os agendamentos podem possuir diferentes estados, como:

* Pendente;
* Confirmado.

Outros estados poderão ser adicionados conforme a evolução do sistema.

---

## 📚 Documentação

A documentação complementar do projeto está organizada na pasta `docs/`.

### Diagramas

Os diagramas do sistema podem ser encontrados em:

```text
docs/diagramas/
```

### Protótipos

Os protótipos e informações relacionadas às telas do sistema podem ser encontrados em:

```text
docs/prototipos/
```

### Protótipo no Figma

🔗 **Link do protótipo:**

https://www.figma.com/design/7VZa5L9xZABGCEB4kYEZ4f/Barber-Grid?node-id=1-1049&p=f&t=BhW3g7l4vlAelgQP-0

---

## 🔀 Organização do desenvolvimento

O desenvolvimento do projeto é acompanhado utilizando recursos do GitHub.

As atividades são organizadas por meio de:

* Issues;
* Labels;
* Branches;
* Pull Requests;
* GitHub Project.

As principais categorias de trabalho utilizadas são:

* `enhancement` — novas funcionalidades ou melhorias;
* `bug` — correção de erros;
* `task` — tarefas técnicas.

As áreas também podem ser identificadas por Labels como:

* `frontend`;
* `backend`;
* `database`;
* `documentation`;
* `testing`.

A organização segue o padrão definido para os projetos da disciplina. ([Fnanda IFRN][1])

---

## 🌿 Convenção de branches

As branches seguem o padrão:

```text
prefixo/numero-da-issue-descricao
```

Exemplos:

```text
feature/10-criar-agendamento
```

```text
fix/15-corrigir-conflito-horario
```

```text
task/20-organizar-documentacao
```

---

## 🧪 Testes

Os testes e validações do sistema serão realizados durante o desenvolvimento das funcionalidades.

Entre os aspectos que podem ser testados estão:

* criação de agendamentos;
* validação de horários;
* cadastro de clientes;
* cadastro de serviços;
* funcionamento das páginas;
* comportamento do sistema em diferentes situações.

---

## 🔮 Melhorias futuras

Possíveis melhorias para futuras versões do Barber Grid incluem:

* autenticação completa de usuários;
* recuperação de senha;
* controle de permissões;
* painel administrativo personalizado;
* notificações de agendamentos;
* integração com serviços de mensagens;
* relatórios;
* dashboard com informações da barbearia;
* sistema de fidelidade;
* melhorias na responsividade;
* novos testes automatizados.

---

## 👨‍💻 Equipe

| Nome                   | Função          |
| ---------------------- | --------------- |
| **Álvaro Yuri**        | Project Owner, Scrum Master, Desenvolvedor |


> Atualize esta tabela com os integrantes e suas respectivas responsabilidades no projeto.

---

## 📌 Informações acadêmicas

**Projeto:** Barber Grid
**Área:** Desenvolvimento de Sistemas
**Tecnologia principal:** Django

**Instituição:** IFRN Campus São Paulo do Potengi
**Disciplina:** Projeto de Desenvolvimento de Sistemas para Internet
**Professor(a):** Fernanda Lígia

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

```


