
/*import { PrismaClient } from "@prisma/client/extension"
import { log } from "console";

export const createUsuario = async() => {
    try{
        const prisma = new PrismaClient();
        const newUsuario = new {
            nombre:"Bertha Alicia",
          apellido:"Calderon Velazco",
          email:"x_betty@hotmail.com",
          contra: "betty1",
          genero:"Femenino",
          tipoUser:"cliente",
          fechaN: "1970-08-15",
          estatus: "Activo",
        };

       const createdUsuario = await prisma.usuario.create({
            data: newUsuario,
        });
        console.log("Created user: ".createdUser);
    }catch(error){
        console.log(error)
    }

}*/