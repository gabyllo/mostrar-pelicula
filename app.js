import { api_key } from "./config.js";

document.addEventListener("DOMcontenloaded", async () => {
    return await mostrarpeliculas()
});

const mostrarpeliculas = async () => {

    const url = 'https:api.themoviedb.org/3/movie/popular'
       
    const repuesta= await fetch(`${url}?api_key=${api_Key}`);
       
    const datosPeliculas = await repuesta.json();

    const peliculas = datosPeliculas.results;

    const imgURL = [];
        
    peliculas.forEach(pelicula => {    
        imgURL.push(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`);
    });

   imgURL.forEach(img => { 
        const imgElement = document.createElement('img');
        imgElement.src = img;
        document.body.appendChild(imgElement);
    });
   
    

}
