## Installation

First, install [Node.JS](https://nodejs.org/)

### Frontend

Go to main path of the aplication and use

```bash
npm install
```

To download the dependencies of the project

```bash
npm start
```

to run in DEV/Local environment

To deploy in other environments use

```bash
npm run serve
```

This command generate a `./build ` folder, this folder have compiled code of the app to deploy in some cloud service

##### Docker
We have Dockfile to dock the application to start the image use:
```bash
docker build -t react-phone-web .
```
To intallation & this for run the app
```bash
docker run --env-file ./.env.production -it -p 3000:3000 react-phone-web
```

You need some .env files with secrets of the app, request it me in my [mail](mailto:daniel.barriga.grados@gmail.com).

### Backend

This application uses its own endpoint you have the source code [here](https://github.com/dani-b-g/backedn-phones-react)

If you have Node.JS installed, Go to main path of the aplication and use

```bash
npm install
```

To install all dependecies

```bash
node index.js
```

To start the server in DEV/Local environment

You also have the Backend documentation (Swagger) [here](https://phonex-react.herokuapp.com/swagger) to use it.

This whole project is working with a MongoDB Database

##### Docker
We have Dockfile to dock the application to start the image use:
```bash
docker build -t node-phone-api .
```
To intallation & this for run the app
```bash
docker run --env-file ./env.development -it -p 5000:5000 node-phone-api
```
You need some .env files with secrets of the app, request it me in my [mail](mailto:daniel.barriga.grados@gmail.com).

## Developer

[Daniel.B.G](https://www.linkedin.com/in/daniel-b-g/)
