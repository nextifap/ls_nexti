# GitHub Actions - Deploy FTP

Este diretório contém os workflows do GitHub Actions para automatizar o deploy do frontend.

## Workflow: Deploy Frontend to FTP Server

O arquivo `main.yml` contém um workflow que:

1. **Triggers**: Executa quando há push na branch `main` ou `master` com mudanças na pasta `frontend/`
2. **Build**: Instala dependências e faz o build do projeto React
3. **Deploy**: Faz upload dos arquivos estáticos para o servidor FTP

## Configuração das Secrets

Para que o workflow funcione, você precisa configurar as seguintes secrets no repositório GitHub:

### Como configurar as secrets:

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Secrets and variables** → **Actions**
4. Clique em **New repository secret**
5. Adicione cada uma das secrets abaixo:

### Secrets necessárias:

| Secret | Descrição | Exemplo |
|--------|-----------|---------|
| `FTP_SERVER` | Endereço do servidor FTP | `ftp.exemplo.com` |
| `FTP_USERNAME` | Usuário do FTP | `usuario_ftp` |
| `FTP_PASSWORD` | Senha do FTP | `senha_segura_123` |
| `FTP_SERVER_DIR` | Diretório no servidor onde fazer upload | `/public_html/` ou `/htdocs/` |

### Exemplo de configuração:

```
FTP_SERVER: ftp.meusite.com
FTP_USERNAME: meu_usuario
FTP_PASSWORD: minha_senha_segura
FTP_SERVER_DIR: /public_html/
```

## Como funciona o workflow:

1. **Checkout**: Baixa o código do repositório
2. **Setup Node.js**: Configura o ambiente Node.js 18
3. **Install dependencies**: Instala as dependências com `npm ci`
4. **Build**: Executa `npm run build` para gerar os arquivos estáticos
5. **Deploy**: Faz upload da pasta `dist/` para o servidor FTP

## Arquivos excluídos do deploy:

O workflow exclui automaticamente arquivos desnecessários como:
- Arquivos de desenvolvimento (`.git`, `node_modules`, etc.)
- Arquivos de configuração (`package.json`, `vite.config.js`, etc.)
- Código fonte (`src/`, `public/`)
- Arquivos de teste e documentação

## Execução manual:

O workflow também pode ser executado manualmente através da interface do GitHub Actions, mesmo sem push no código.

## Logs e debug:

O workflow está configurado com `log-level: verbose` para facilitar o debug em caso de problemas.
