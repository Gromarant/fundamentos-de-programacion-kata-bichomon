//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const title = document.querySelector('#gen-1');
title.innerHTML = 'Generasión 1 Pokimon';

//2. Cambia el color de fondo de la primera ge(neración de Pokimon.
const firstGeneration = document.querySelector('body > main > div:nth-child(6)');
firstGeneration.style.backgroundColor = '#E7D9D7';

//3. Imprime por consola la URL de la página.
const pageURL = window.location.href;
console.log(`Page url: ${pageURL}`);

//4. Imprime por consola el dominio de la página.
const pageDomain = document.domain;
console.log(`Page domain: ${pageDomain}`) //deprecated

//5. Imprime todos los nodos de imagen.
const images = document.querySelectorAll('img');
for (let i=0; i<=images.length-1; i++) {
  console.log(`Index: ${i} img: ${images[i]}`);
}

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for (let index=0; index<=images.length-1; index++) {
  images[index].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const flyPokimons = document.querySelectorAll('body > main > div.infocard-list.infocard-list-pkmn-lg > div.infocard > span.infocard-lg-data.text-muted > small > a.itype.flying');
for (let i=0; i<=flyPokimons.length; i++) {
  flyPokimons[i].style.backgroundColor = '#F6F701';
}