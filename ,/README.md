# ConectaTalentos

Protótipo front-end modular da plataforma ConectaTalentos.

## Como rodar

1. Abra a pasta `conecta-talentos` no VS Code.
2. Entre em `src/`.
3. Clique com o botão direito em `index.html`.
4. Escolha **Open with Live Server**.
5. Use a navegação do site.

> Não abra os arquivos HTML com duplo clique (`file://`), porque os módulos JavaScript ES Modules precisam de um servidor local.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5.3
- Bootstrap Icons
- Google Fonts / Poppins
- localStorage para protótipo de autenticação

## Estrutura

- `src/index.html`: Home
- `src/pages/`: telas
- `src/css/`: estilos
- `src/js/components/`: componentes reutilizáveis
- `src/js/pages/`: comportamento específico das páginas
- `src/js/services/`: dados/serviços
- `src/js/utils/`: funções auxiliares
- `src/assets/`: imagens e ícones

## Estado do projeto

Esta versão é um protótipo navegável. Cadastro/login usam `localStorage`; não existe backend, banco de dados, upload real de imagens, autenticação segura ou API externa ainda.
