const personajes = ['victor', 'manuel', 'leiva'];
//se pone la coma para ignorar el primer dato y asi mandar a llamar el segundo
const[, , p1] = personajes;

console.log(p1);

const retornaArreglo = () =>{
    return ['abc',123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const fun = (valor) =>{
    return [valor, () =>{console.log('Hola mundo')} ]
}

const [nombre, setnombre] = fun (' victor');

console.log(nombre);
setnombre();