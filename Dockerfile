# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
EXPOSE 4100