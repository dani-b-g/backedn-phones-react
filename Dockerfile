# System dependencies
FROM node:14.15

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]