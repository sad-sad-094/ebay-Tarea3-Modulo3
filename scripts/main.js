/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { itemsList } from '../helpers/Get-Data.js';





function openDetailsPagebyItem(name) {
  
  let products = itemsList.filter(elements => elements.category === name);
  
  localStorage.setItem('products', JSON.stringify(products));
}

function openDetailsPagebyCategory(name) {

  let products = itemsList.filter(elements => elements.category === name);
  
  localStorage.setItem('products', JSON.stringify(products));
}



export { openDetailsPagebyItem, openDetailsPagebyCategory };
