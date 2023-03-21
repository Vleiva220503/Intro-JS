import {getHeroes} from './bases/08-impor-expor'


const persona = new Promise ((resolver, reject) => {
    const heroe = getHeroes(2);
    console.log(heroe);
},2000)

Promesa.then(() =>{
    console.log('The la promesa');
})