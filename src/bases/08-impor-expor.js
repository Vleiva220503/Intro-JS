import { heroes } from '../data/Heroes';


/*function getHeroes(fruta) {
    return heroes.find(( heroes ) => {
        if (heroes.id === id){
            return true;
        }else{
            return false;
        }
    });
}*/

export const getHeroes = (id) => heroes.find((heroes) => heroes.id === id);


export const getHeroeso = (owner) => heroes.filter((heroes) => heroes.owner === owner)

console.log(getHeroeso('DC'));
console.log(getHeroes(2));


//export default getHeroes;

