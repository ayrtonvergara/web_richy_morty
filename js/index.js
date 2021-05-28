const mostrarPersonaje = function(){
   let personaje = this.personaje; // para acceder datos personaje, que esta en la linea 26
   const molde = document.querySelector
   (".molde-detalle").cloneNode(true);
   molde.querySelector(".nombre-sa-personaje").innerText = personaje.name;
   molde.querySelector(".imagen-sa-personaje").src = personaje.image;
   molde.querySelector(".estado-sa-personaje").innerText = personaje.status;
   Swal.fire({ // swit alert
    title: personaje.name,

    html: molde.innerHTML
   });
};


const cargarPersonajes = async function(){
   // llamar a la api
   let res = await axios.get("https://rickandmortyapi.com/api/character");
   let personajes = res.data.results;
   const contenedor = document.querySelector("#contenedor-personajes");
   const molde = document.querySelector(".molde-personaje");
   personajes.forEach(p=>{
      let copia = molde.cloneNode(true);
      copia.querySelector(".nombre-personaje").innerText = p.name;//para buscar el nombre
      copia.querySelector(".imagen-personaje").src = p.image;//para busacr la imagen
      copia.querySelector(".btn-ver-personaje").personaje = p;
      copia.querySelector(".btn-ver-personaje")
      .addEventListener("click", mostrarPersonaje);
      contenedor.appendChild(copia);
      
   });
   
  };
  
  document.addEventListener("DOMContentLoaded", ()=>{
  //todo lo que ponga aqui se va a ejecutar cuando se cargue la pagina
     cargarPersonajes();
  });

