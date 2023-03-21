const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;


console.log(saludar('Victor')) 
console.log(saludar2('Manuel'))

const getUser =() => ({
    uid: 'ABCD',
    username: 'Vl2205',
});

const user = getUser();
console.log(user);

const getuserActivo = () => ({
    uid: 'abcd',
    username: 'Manuel',
});

const userActivo = getuserActivo();
console.log(userActivo);