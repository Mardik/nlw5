<h1 align="center">
  <img width="450px" src="./.github/assets/logo.svg" />
  <br />
  <a href="https://www.linkedin.com/in/thiago-almeida-3130a1194/">
    <img alt="Linkedin" src="https://img.shields.io/badge/-Thiago%20Almeida-29B6D1?label=Linkedin&logo=linkedin&style=flat-square">
  </a>
  <a href="https://github.com/Mardik/nlw5/blob/main/.github/LICENSE.txt">
    <img alt="GitHub license" src="https://img.shields.io/github/license/Mardik/nlw5?logo=mint&style=flat-square">
  </a>
  <a href="https://github.com/Mardik/nlw5/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Mardik/nlw5?color=29B6D1&style=flat-square">
  </a>
  <a href="https://github.com/Mardik/nlw5/issues?q=is%3Aissue+is%3Aclosed">
    <img alt="GitHub issues" src="https://badgen.net/github/closed-issues/Mardik/nlw5?color=29B6D1&style=flat-square">
  </a>
  <a href="https://github.com/Mardik/nlw5/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Mardik/nlw5?color=29B6D1&style=flat-square">
  </a>
  <a href="https://github.com/Mardik/nlw5/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Mardik/nlw5?color=29B6D1&style=flat-square">
  </a>
</h1>
<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-Autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-Licença">Licença</a>
</p>

<img src="./.github/assets/podcastr.svg" />

## :page_facing_up: Descrição
O Podcastr é um app para ouvir podcasts sobre programação

## :art: Layout
Você pode acessar o Layout pelo <a href="https://www.figma.com">Figma<a> atravês <a href="https://www.figma.com/file/5KchzYko8NeeV0suqrSi6x/Podcastr-(Copy)?node-id=199599%3A1028">desse link<a>.

## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [Next.js](https://nextjs.org/)
- [React.js](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

O projeto consistem em um aplicação web desenvolvida utilizando ReactJS e NextJS consumindo dados de uma API, neste caso, os dados foram providos pelo JSON-Server. As atividades de desenvolvimento foram realizada durante a NLW#5 da Rocketseat.

## :clipboard: Funcionalidades
- [x] Tocar podcast.
- [x] Quando um podcast acaba, outro começa em seguida.
- [x] Selecionar apenas um podcast para ouvir.
- [x] Opção de ir para o próximo podcast.
- [x] Opção de ir para o anterior podcast.
- [x] Opção de Loop.
- [x] Opção para embaralhar.


## :closed_book: Instalação

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório.
$ git clone https://github.com/Mardik/nlw5.git

# Vá para a pasta nlw5
$ cd nlw5

# Instala as dependências e faz o build das imagens
$ docker-compose run react-app yarn install

# Utilize o dcoker-compose para iniciar o ambiente
$ docker-compose up

# !Se você estiver rodando Docker diretamente sobre Linux pode ser necessário ajustar as permissões. Lembre-se de repetir o comando abaixo sempre que estiver problemas para acessar os arquivos diretamente no Docker host.
$ sudo chown -R $USER:$USER .

# O app vai está rodando na porta 3000 - acesse <http://localhost:3000>
# O API vai está rodando na porta 3333 - acesse <http://localhost:3333>
```

## :man: Autor

<a href="https://github.com/Mardik">
 <img src="https://avatars.githubusercontent.com/u/6855092?v=4" width="70px;" alt=""/>
 <br />
 <sub><b>Thiago Almeida</b></sub>
</a>


Feito com garra por Thiago Almeida :wave::wave: Entre em contato!🚀

<a href="https://www.linkedin.com/in/thiago-almeida-3130a1194/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Thiago%20Almeida-9871F5?label=Linkedin&logo=linkedin&style=flat-square">
</a>


## :memo: Licença

Copyright © 2020 [Thiago Almeida](https://github.com/Mardik).<br />
This project is [MIT](./.github/LICENSE.txt) licensed.