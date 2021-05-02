FROM node:lts-buster

# Cria o diretorio 'app'.
RUN mkdir /app

# Faz da pasta 'app' o diretório de trabalho corrente.
WORKDIR /app

# Exponhe a porta 3000 e 3333 para ser acessada de fora do ambiente
# do docker container.
EXPOSE 3000
EXPOSE 3333