FROM ubuntu:latest

RUN apt-get update && apt-get install -y docker-compose

COPY . /app
WORKDIR /app

RUN docker-compose -f docker-compose.yml up -d
