import mongoose, {Schema} from 'mongoose';

interface InterfaceUser {
    name: string;
    email: string;
    password: string;
}

//DEFINIMOS EL SCHEMA:

const userSchema = new Schema({
    name: {
        type: String,
        required: true,  //name no puede ser vacio
        trim: true       //que se eliminen los espacios en blanco al final y al principio
    },
    email: {
        type: String,
        required: true,
        trim: true,     //que se eliminen los espacios en blanco al final y al principio
        unique: true    //que sean unicos los emails
    },
    password: {
        type: String,
        required: true,
    }
});

//CREACION DEL MODELO:

const User = mongoose.model<InterfaceUser>('User', userSchema);    

export default User;