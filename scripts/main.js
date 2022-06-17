/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { itemsList } from '../helpers/CRUD.js';





function openDetailsPagebyItem(name) {

}

function openDetailsPagebyCategory(name) {

  let products = itemsList.filter(elements => elements.category === name);

  localStorage.setItem('category', name);


  products.forEach((item, index, products) => {
    let selectedImg1 = document.getElementById('actual-item-viewed');
    selectedImg1.setAttribute('src', `${item[index].image}`);
    let selectedImg2 = document.getElementById(`related${index}`);
    selectedImg2.setAttribute('src', `${item[index].image}`);


    document.getElementById('actual-item-name').textContent = item.tittle;
  })
}



export { openDetailsPagebyItem, openDetailsPagebyCategory };