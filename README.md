# NExTI - Editora Digital

## 📚 Sobre o Projeto

O **NExTI** é uma plataforma digital de editora que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde. A plataforma permite aos usuários explorar, ler online e submeter materiais para publicação.

### ✨ Funcionalidades Principais

- **Estante Virtual**: Catálogo digital com livros e materiais educacionais
- **Leitura Online**: Visualização de PDFs diretamente na plataforma
- **Submissão de Materiais**: Sistema para autores submeterem seus trabalhos
- **Corpo Editorial**: Informações sobre a equipe editorial
- **FAQ e Suporte**: Perguntas frequentes e sistema de reporte de bugs
- **Design Responsivo**: Interface moderna e adaptável a diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Roteamento da aplicação
- **React Icons** - Biblioteca de ícones
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e servidor de desenvolvimento
- **SweetAlert2** - Biblioteca para alertas e modais

### Backend
- **Flask** - Framework Python para API
- **Flask-CORS** - Middleware para Cross-Origin Resource Sharing
- **Requests** - Biblioteca para requisições HTTP

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para JavaScript/React
- **PostCSS** - Processador CSS
- **Autoprefixer** - Plugin PostCSS para prefixos CSS

## 📁 Estrutura do Projeto

```
ls_nexti/
├── backend/
│   └── app.py                 # API Flask para reporte de bugs
├── frontend/
│   └── front/
│       ├── src/
│       │   ├── components/    # Componentes React reutilizáveis
│       │   ├── pages/         # Páginas da aplicação
│       │   ├── styles/        # Arquivos CSS específicos
│       │   ├── assets/        # Imagens, PDFs e outros recursos
│       │   ├── data/          # Dados estáticos (lista de livros)
│       │   └── features/      # Funcionalidades específicas
│       ├── public/            # Arquivos públicos
│       └── package.json       # Dependências do frontend
├── package.json               # Dependências do projeto principal
└── README.md                  # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Python 3.8 ou superior
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd ls_nexti
   ```

2. **Instale as dependências do frontend**
   ```bash
   cd frontend/front
   npm install
   ```

3. **Instale as dependências do backend**
   ```bash
   cd ../../backend
   pip install flask flask-cors requests
   ```

4. **Execute o backend**
   ```bash
   python app.py
   ```
   O servidor Flask estará rodando em `http://localhost:5000`

5. **Execute o frontend**
   ```bash
   cd ../frontend/front
   npm run dev
   ```
   A aplicação React estará disponível em `http://localhost:5173`

## 📖 Páginas Disponíveis

- **Home** (`/`) - Página inicial com banner e livros em destaque
- **Sobre Nós** (`/sobre-nos`) - Informações sobre a editora
- **Corpo Editorial** (`/corpo-editorial`) - Equipe editorial
- **Nossos Serviços** (`/nossos-servicos`) - Serviços oferecidos
- **Estante Virtual** (`/estante-virtual`) - Catálogo completo de livros
- **Ler Online** (`/ler-online/:id`) - Visualizador de PDF
- **Detalhes do Livro** (`/livro/:id`) - Informações detalhadas do livro
- **Submeter Material** (`/submeter-material`) - Formulário para submissão
- **Perguntas Frequentes** (`/perguntas-frequentes`) - FAQ
- **Código de Ética** (`/codigo-de-etica`) - Diretrizes éticas
- **Política de Privacidade** (`/politica-de-privacidade`) - Termos de privacidade

## 📚 Livros Disponíveis

A plataforma atualmente oferece os seguintes títulos:

1. **Minha vida saudável** - Coletânea de HQs
2. **Formação em saúde** - Experiências docentes e discentes
3. **Guia de práticas educativas** - GUIA PESCE
4. **Como pensar e desenvolver softwares** - Crescimento sustentável e escalável
5. **Formação em enfermagem e educação em saúde** - Experiências exitosas
6. **Saberes e práticas da enfermagem** - Contexto da programação da saúde do trabalhador
7. **Assistência e Saúde** - Materiais educacionais

## 🔧 Scripts Disponíveis

### Frontend
```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run lint     # Executa o linter
npm run preview  # Visualiza o build de produção
```

## 🐛 Reporte de Bugs

O sistema possui integração com Discord para reporte de bugs. A API está configurada para enviar notificações automáticas para um canal específico quando bugs são reportados.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [INSERIR TIPO DE LICENÇA]. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou suporte, entre em contato através dos canais disponíveis na plataforma.

---

**NExTI** - Transformando a educação através da tecnologia 📚✨
