'use strict';

let allCats = [];
let catform = document.getElementById('catform');
let catlist = document.getElementById('catlist');

function Cat(name) {
  this.name = name;
  allCats.push(this);
  settingToLocalStorage();
}

Cat.prototype.render = function () {
  let listItem = document.createElement('li');
  listItem.textContent = this.name;
  catlist.appendChild(listItem);
}

function handleCatSubmit(e) {
  e.preventDefault();
  let newCat = new Cat(e.target.kitten.value);
  catform.reset();
  newCat.render();
}

function settingToLocalStorage() {
  let data = JSON.stringify(allCats);
  console.log(data)
  localStorage.setItem('cats', data);
}