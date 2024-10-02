"use strict";
//let nombre:string = "Nicolas";
//nombre = "Oviedo";
//console.log(nombre);
const e1 = {
    firstName: "Juan",
    lastName: "Perez",
    age: 20,
    address: {
        city: "bogota",
        country: "Colombia",
        ad: "Calle 1 # 2-3",
    }
};
const e2 = {
    firstName: "pepe",
    lastName: "hernandez",
    age: "12",
    address: {
        city: "Medellin",
        country: "Colombia",
        ad: "Calle 5 # 7-8",
    }
};
//funcion para imprimir o mostrar info del estudiante 
/*function mostrarEstudiante (estudiante: estudiante){
    console.log(estudiante.firstName);
    console.log(estudiante.age);
    console.log(estudiante.address?.city);
}
mostrarEstudiante(e1);
*/
//version declarativa
/*const mostrarEstudiante = (estudiante: estudiante): string =>{
    return estudiante.firstName
        +","+
        estudiante.age
        +","+
        estudiante.address?.country;
}
console.log(mostrarEstudiante(e1));
*/
/*const mostrarEstudiante = (estudiante: Estudiante): string =>{
    const {firstName,lastName} = estudiante;
    return`Nombre de estudiante: ${ firstName} | apellido: ${lastName}`
}
console.log(mostrarEstudiante(e1));
*/
//ARREGLOS
//arreglo de tipo estudiante
let estudiantes = [];
//recorrer el arreglo de estudiante 
//imprimiendo nombre y apellido 
//usando el metodo foreach
/*estudiantes.forEach(est => {
    console.log(`Nombre: ${est.firstName}, Apellido: ${est.lastName}`);
});
*/
//agregar estudiantes
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
//eliminar estudiantes
const elminarEstudiante = (indice) => {
    estudiantes.splice(indice, 1);
};
const eliminarEstudiantePorApellido = (apellido) => {
    const indice = estudiantes.findIndex(est => est.lastName === apellido);
    if (indice !== -1) {
        estudiantes.splice(indice, 1);
        return true;
    }
    return false;
};
agregarEstudiante({
    firstName: "Carlos",
    lastName: "Gonzalez",
});
agregarEstudiante({
    firstName: "Juan",
    lastName: "Mendez",
});
agregarEstudiante({
    firstName: "pepe",
    lastName: "hernandez",
});
console.log(estudiantes);
elminarEstudiante(0);
console.log(estudiantes);
eliminarEstudiantePorApellido("hernandez");
console.log(estudiantes);