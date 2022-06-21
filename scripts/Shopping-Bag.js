/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

let bagList = await fetch('https://ebay-sad.herokuapp.com/bag')
  .then(response => response.json())

let container = document.getElementById('containerList');

bagList.forEach(item => {
  let div1 = document.createElement('div');
  div1.classList.add('item-selected');
  let div2 = document.createElement('div');
  let img = document.createElement('img');
  img.src = item.image;
  div2.appendChild(img);
  div1.appendChild(div2);
  let title = document.createElement('h5');
  title.innerHTML = item.title;
  div1.appendChild(title);
  let price = document.createElement('h6');
  price.innerHTML = `Price: ${item.price}`;
  div1.appendChild(price);
  let size = document.createElement('h6');
  size.innerHTML = `Size: ${item.size}`;
  div1.appendChild(size);
  let quantity = document.createElement('h6');
  quantity.innerHTML = `Quantity: ${item.quantity}`;
  div1.appendChild(quantity);
  container.appendChild(div1);
})

function buyNow() {
  let totalPrice = 0;
  bagList.forEach((item, index, bagList) => {
    totalPrice = totalPrice + item.floatPrice;

    fetch(`https://ebay-sad.herokuapp.com/bag/${index + 1}`, {
      method: "DELETE"
    })
  })

  alert(`Buy Succefull. You paid: ${totalPrice}`);

  bagList = [];
  container.innerHTML = '';

}

document.getElementById('buyNowBttn').addEventListener('click', buyNow);