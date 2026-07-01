FROM node:22.23.1-slim

WORKDIR /app

COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm","run","dev"]
