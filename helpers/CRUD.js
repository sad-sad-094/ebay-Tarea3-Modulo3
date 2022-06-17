/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

const url = 'https://ebay-sad.herokuapp.com/productos';

const itemsList = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data;

    console.log(products);
  })



export { itemsList }