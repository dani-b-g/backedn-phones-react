# System dependencies
FROM node:14.15

# WORKPATH
WORKDIR /appPhone/backend

COPY package*.json ./

RUN npm install

COPY . .


# PORT
EXPOSE 5000

CMD ["npm", "start"]