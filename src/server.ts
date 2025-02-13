import express from "express";          //SINTAXIS DE ESM ECMASCRIPT MODULES (modificar el package.json para poder usarla)
import router from "./router";

//ESTE ARCHIVO TIENE LA CONFIGURACION DEL SERVIDOR, BASE DE DATOS, CORS, ETC.

//const express = require("express");       //SINTAXIST DE EXPORT CON COMMON.JS


const app = express();          //INSTANCIA DEL SERVIDOR DE EXPRESS, CREACION DE APP EN EXPRESS

// HABILITAR LEER DATOS DE FORMULARIOS PARA EXPRESS

app.use(express.json())    //usamos use porque queremos que este en todos los request y le ponemos .json() para que acepte json

app.use('/', router);   //router va a entrar a router y va a buscar que ruta tiene el nombre especificado

//USAMOS NODEMON PARA QUE SE RECARGUE AUTOMATICAMENTE EL SERVIDOR AL HACER CAMBIOS.

// "scripts": {
//     "dev": "nodemon index.js"
//   },


export default app;