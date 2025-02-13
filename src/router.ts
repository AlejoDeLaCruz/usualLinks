//ESTE ARCHIVO TIENE LAS RUTAS DE URL
import { Router } from "express";
import { createAccount } from "./handlers/index";


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

//LANDING PAG

router.get('/', (req, res) => {
    res.send('Hola mundo esta es la pagina principal')
})

//AUTENTICACION Y REGISTRO


//FORMA ORIGINAL DE HACERLO SIN REEMPAZAR EL CALLBACK:

// router.post('/auth/register', async (req, res) => {
//     try {
//         /* const user = await User.create(req.body); */  
//         const user = new User(req.body);
//         await user.save();                                            
//         res.status(201).json({success: true, data: user})   
//     }catch(error: any){
//         res.status(400).json({success: false, data: error.message})
//     }
//     await User.create(req.body); 
// })


//NUEVA FORMA DE HACERLO REEMPLAZANDO EL CALLBACK POR UNA FUNCION MAS PROLIJAMENTE:

router.post('/auth/register', createAccount);

export default router;