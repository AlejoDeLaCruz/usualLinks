//ESTE ARCHIVO SE ENCARGA DE MANEJAR EL REQUEST Y EL TIPO DE PETICION PARA REALIZAR LAS ACCIONES
//ES DECIR TIENE LA REALIZACION DE LOS METODOS.
import type {Request, Response} from 'express';    //IMPORTAMOS LOS TIPOS DE REQ Y RES DESDE EXPRESS PARA QUE EL TYPE SEA CORRECTO
import User from "../models/User";

export const createAccount = async (req: Request, res: Response) => {
  try {
    /* const user = await User.create(req.body); */               // <------- PRIMERA MANERA DE AGREGAR REGISTROS
    const user = new User(req.body);
    await user.save();                                            // <------- SEGUNDA MANERA DE AGREGAR REGISTROS
    res.status(201).json({ success: true, data: user });          //RETORNAR UN STATUS Y UNA RESPUESTA
  } catch (error: any) {
    res.status(400).json({ success: false, data: error.message });
  }
  await User.create(req.body);                                    //GRACIAS AL ORM PODEMOS USAR ESTA SINTAXIS PARA CREAR EL USUARIO EL LUGAR DE SQL Y TODA LA BOLA
};
