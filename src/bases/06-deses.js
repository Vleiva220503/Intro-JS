const persona = {
    nombre: `victor`,
    edad: 15,
    clave: 'vl2205',
}

//const {nombre, edad, clave,} =  persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const usesContex = ({clave,edad, nombre, rango = `capitan`}) => {
    return {
        nombre: nombre,
        rango: rango,
        nombreClave:  clave,
        anios:  edad,
        lati:{
            lat: 4848484,
            long: 8884884,
        }
    }
}
const {nombreClave, anios, lati} = usesContex(persona);
console.log(lati)
console.log(nombreClave, anios)
//const avenger = usesContex(persona);
//console.log(avenger)