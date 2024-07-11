import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from './firebase'
import { Persona } from "@/interfaces/iPersonas";

export const registrarPersona =async(personas:Persona)=>{
    const docRef= await addDoc(collection(db,'personas'), personas)
}

export const obtenerPersonas = async()=>{
    let personas:Persona[] = []
    const querySnapshot = await getDocs(collection(db, 'personas'));
    querySnapshot.forEach((doc)=>{
        let persona:Persona={
            rut:doc.data().rut,
            apellido:doc.data().rut,
            correo:doc.data().correo,
            edad: doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre
        }
        personas.push(persona)
    })
    return personas
}