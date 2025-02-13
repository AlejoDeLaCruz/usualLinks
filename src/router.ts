//ESTE ARCHIVO TIENE LAS RUTAS DE URL
import {Router} from "express"

const router = Router();

//ROUTING

//EL GET SIEMPRE TOMA REQ Y RES
//Cuando usamos una url mandamos informacion como que navegador estamos usando, en que parte de la pagina estamos y mucho mas 
//toda esa informacion es parte del REQ 

//El RES es la respuesta de la app.

//RUTAS:

// router.get('/', (req, res) => {
//     res.send("Hola mundo en express")   //send es algo que vamos a enviar como html
// });

// router.get('/api/us', (req, res) => {
//     res.send("Us")   //send es algo que vamos a enviar como html
// });

// router.get('/blog', (req, res) => {
//     res.send("Blog")   //send es algo que vamos a enviar como html
// });


//AUTENTICACION Y REGISTRO

router.post('/auth/register', (req, res) => {
    console.log(req.body);
})

export default router;