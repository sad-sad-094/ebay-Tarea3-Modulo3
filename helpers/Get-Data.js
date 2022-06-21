/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

const url = 'https://ebay-sad.herokuapp.com/productos';

let itemsList;

fetch(url)
  .then(response => response.json())
  .then(data => {itemsList = data})


  export { itemsList }