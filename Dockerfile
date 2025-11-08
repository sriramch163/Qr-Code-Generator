FROM node:18-alpine

WORKDIR /app

COPY Server/package*.json ./
RUN npm install

COPY Server/ ./
COPY Client/ ./public/

EXPOSE 3000

CMD ["node", "app.js"]