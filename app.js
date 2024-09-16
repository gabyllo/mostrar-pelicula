import { api_key } from "./config.js";

document.addEventListener("DOMcontenloaded", async () => {
    return await mostrarpelicula()
});

const mostrarpelicula = async () => {

    const url = 'https:api.themoviedb.org/3/movie/popular'
       
    const repuesta= await fetch(`${url}?api_key=${api_Key}`);
       
    const datosPeliculas = await repuesta.json();

    const peliculas = datosPeliculas.results;

    const imgURL = [];
        
    peliculas.foreach(peliculas => {    
        imgURL.push(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`);
    });

   imgURL.forEach(img => { 
        const imgElement = document.createElement('img');
        imagenPeliculas.src = img;
        document.body.appendChild(imagenPeliculas);
    });
   
    

}