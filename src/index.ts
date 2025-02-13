import app from "./server";

//ESTE ARCHIVO SIRVE PARA INICIALIZAR SERVIDOR

const port = process.env.PORT || 3000; //process.env.PORT es el puerto que nos va a asignar el hosting que usemos.

app.listen(port, () => {
    console.log("Servidor funcionando", port);
})          //PUERTO 3000 DEL SERVIDOR      