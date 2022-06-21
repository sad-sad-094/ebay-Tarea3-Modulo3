/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { openDetailsPagebyItem, openDetailsPagebyCategory } from './main.js';

let runningShoes = document.getElementById('product1');
let casualShoes = document.getElementById('product2');
let trainingShoes = document.getElementById('product3');

let runningCategory = document.getElementById('runningCat');
let casualCategory = document.getElementById('casualCat');
let trainingCategory = document.getElementById('trainingCat');

runningShoes.addEventListener('click', () => openDetailsPagebyItem('running'));
casualShoes.addEventListener('click', () => openDetailsPagebyItem('casual'));
trainingShoes.addEventListener('click', () => openDetailsPagebyItem('training'));

runningCategory.addEventListener('click', () => openDetailsPagebyCategory('running'));
casualCategory.addEventListener('click', () => openDetailsPagebyCategory('casual'));
trainingCategory.addEventListener('click', () => openDetailsPagebyCategory('training'));
