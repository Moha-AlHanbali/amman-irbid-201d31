'use strict';

let catbutton = document.getElementById('catbutton');

let handleCatButtonClick = function () {
  if (localStorage.cats !== undefined) {
    let catsFromLS = JSON.parse(localStorage.cats);
    console.log('allCats array after retrieving from local storage', allCats);
    allCats = catsFromLS;
    for (let i = 0; i < allCats.length; i++) {
      allCats[i].render();
    }
    console.log('allCats array after reinstantiating through our Cat constructor', allCats);
  }
};

catbutton.addEventListener('click', handleCatButtonClick);
