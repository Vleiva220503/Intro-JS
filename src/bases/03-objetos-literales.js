const persona = {
  nombre: "victor",
  apellido: "leiva",
  edad: 19,
  direccion: {
    ciudad: "tipitapa",
    zip: 3838383,
    lat: 83838383,
    log: 903030303,
  },
};
//clon del objeto
const persona2 = {...persona};
console.log({ persona: persona });
