
const cargarPersonajes = async function(){
 // llamar a la api
 let res = await axios.get("https://rickandmortyapi.com/api/character");
 let personajes = res.data.results;
 personajes.forEach(p=>{
    console.log(p.name);
 });
 
};

document.addEventListener("DomContentLoaded", ()=>{
//todo lo que ponga aqui se va a ejecutar cuando se cargue la pagina
   cargarPersonajes();
});

