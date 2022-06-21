/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let products = JSON.parse(localStorage.getItem('products'));


let selectedImg1 = document.querySelector('#actual-item-viewed');
selectedImg1.setAttribute('src', `${products[0].image}`);
document.querySelector('#actual-item-name').textContent = products[0].title;
document.querySelector('#actual-item-price').textContent = products[0].price;

products.forEach((item, index, products) => {
  let selectedImg2 = document.querySelector(`#related${index}`);
  selectedImg2.setAttribute('src', `${item.image}`);

})

let related1 = document.getElementById('related1');
let related2 = document.getElementById('related2');
let related0 = document.getElementById('related0')

related1.addEventListener('click', () => {
  let selectedImg1 = document.querySelector('#actual-item-viewed');
  selectedImg1.setAttribute('src', `${products[1].image}`);
  document.querySelector('#actual-item-name').textContent = products[1].title;
  document.querySelector('#actual-item-price').textContent = products[1].price;
})

related2.addEventListener('click', () => {
  let selectedImg1 = document.querySelector('#actual-item-viewed');
  selectedImg1.setAttribute('src', `${products[2].image}`);
  document.querySelector('#actual-item-name').textContent = products[2].title;
  document.querySelector('#actual-item-price').textContent = products[2].price;
})

related0.addEventListener('click', () => {
  let selectedImg1 = document.querySelector('#actual-item-viewed');
  selectedImg1.setAttribute('src', `${products[0].image}`);
  document.querySelector('#actual-item-name').textContent = products[0].title;
  document.querySelector('#actual-item-price').textContent = products[0].price;
})

function sizeSelect(element) {
  let beforeElem = document.querySelector('.size-selector');
  if (beforeElem) {
    beforeElem.classList.remove('size-selector');
  }

  element.classList.add('size-selector');
  // localStorage.setItem('size', element.innerText);
}



let buyButton = document.querySelector('#buynow-bttn');
buyButton.addEventListener('click', () => {
  let size = document.querySelector('.size-selector');
  let itemTitle = document.querySelector('#actual-item-name').innerHTML;
  let shopItem = products.find(elements => elements.title === itemTitle);
  let quantity = document.getElementById('quiantityItem').value;
  alert(`Su compra es:\nReferencia: ${shopItem.title}\nTalla: ${size.textContent}\nCantidad: ${quantity}\nPrecio: ${shopItem.price[0]}${parseFloat(shopItem.price.slice(1, shopItem.price.length)) * parseFloat(quantity)}`)
})

let bagButton = document.querySelector('#addbag-bttn');
bagButton.addEventListener('click', () => {
  let size = document.querySelector('.size-selector');
  let itemTitle = document.querySelector('#actual-item-name').innerHTML;
  let shopItem = products.find(elements => elements.title === itemTitle);
  let quantity = document.getElementById('quiantityItem').value;
  let total = parseFloat(shopItem.price.slice(1, shopItem.price.length)) * parseFloat(quantity);
  let shoping = {
    "title": shopItem.title,
    "image": shopItem.image,
    "size": size.textContent,
    "quantity": quantity,
    "price": `${shopItem.price[0]}${total}`,
    "floatPrice": total
  }

  fetch('https://ebay-sad.herokuapp.com/bag', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(shoping)
  })

  alert('Item added to bag');

})



