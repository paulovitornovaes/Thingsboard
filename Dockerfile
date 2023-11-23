# Use a imagem base do ThingsBoard com PostgreSQL
FROM thingsboard/tb-postgres:3.6.0

# Exponha as portas necessárias (as mesmas definidas no docker-compose.yml)
EXPOSE 9090 1883 7070 5683-5688/udp

# Configure as variáveis de ambiente se necessário
# ENV TB_QUEUE_TYPE=in-memory

# Define o diretório de trabalho no contêiner
WORKDIR /data

# Defina os volumes, conforme especificado no docker-compose.yml
VOLUME /data
VOLUME /var/log/thingsboard
