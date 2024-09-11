# Ignite Feed

Este é um projeto do curso de React da Rocketseat, primeiro projeto em React que construí e com ele aprendi: 
- Criação de projeto com [Vite.js](https://vitejs.dev/)
- Fundamentos do React (componentes, imutabilidade, closure, programação declarativa, iteração de componentes e useState)
- Aprimoração do projeto com Typescript tornando o código mais seguro e com workflow inteligente

### Tecnologias Utilizadas
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>

### Dependências e versões necessárias
- Node.js - versão 18+ ou 20+
- React - 18.3.1

## Como rodar o projeto ✅

### Instalação do Node.js

Este projeto requer o **Node.js** versão 18+ ou 20+. Abaixo estão as instruções para instalação do Node.js em diferentes sistemas operacionais.

#### Windows

1. **Acesse o site oficial do Node.js:**  
    Vá para [https://nodejs.org/](https://nodejs.org/) e baixe o instalador adequado para o Windows (versão 20.x).

2. **Execute o instalador:**  
   Siga as instruções do instalador. Certifique-se de marcar a opção "Add to PATH" durante a instalação.

3. **Verifique a instalação:**  
   Abra o **Prompt de Comando** ou **PowerShell** e execute o seguinte comando para verificar se o Node.js foi instalado corretamente:

   
        node -v

    Você deverá ver algo como v20.x.x.

#### macOS

1. **Via Homebrew (Recomendado):**  
    Se você já usa o Homebrew, instale o Node.js executando o comando abaixo no terminal:

        brew install node@20
2. **Instalação manual:** 

    Acesse o site oficial do Node.js e baixe o instalador do macOS para a versão 18.x ou 20.x.
    Siga as instruções do instalador.

3. **Verifique a instalação:**
    Abra o terminal e execute:

        node -v
    Certifique-se de que a versão instalada é 18.x ou 20.x.

### Linux
1. **Via Node Version Manager (NVM) [Recomendado]:**
    A maneira recomendada de instalar o Node.js no Linux é usando o NVM.

    Instale o NVM:

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

    Carregue o NVM:

        source ~/.bashrc
    Instale o Node.js (versão 20):

        nvm install 20

    Verifique a instalação:

        node -v
2. **Instalação manual via apt (Ubuntu/Debian):**
    
    Atualize os pacotes:

        sudo apt update
    
    Instale o Node.js 20.x:

        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - sudo apt install -y nodejs
    
    Verifique a instalação:
    
        node -v
    O resultado deve ser v20.x.x.

### Instalando todas as dependências
- Depois de instalar o Node.js corretamente, siga os passos abaixo para instalar as dependências do projeto:

    Clone o repositório:

        git clone https://github.com/gabrieldev4/ignitefeed.git

    Navegue até o diretório do projeto:


        cd nome-do-projeto

    Instale as dependências:

        npm install

## Visualizando o projeto✅

Para visualizar o projeto, basta rodar o seguinte comando:

    npm run dev

O Vite irá exibir no console o endereço para visualizar o projeto no navegador, algo como:


    Local: http://localhost:3000/

Abra o navegador e acesse o link fornecido.