'use strict';

let catbutton = document.getElementById('catbutton');

let handleCatButtonClick = function () {
  let data = localStorage.getItem('cats')
  let catsFromLS = JSON.parse(data);
  if (catsFromLS !== null) {
    // console.log('allCats array after retrieving from local storage', allCats);
    // allCats = catsFromLS;
    for (let i = 0; i < catsFromLS.length; i++) {
      new Cat(catsFromLS[i].name);
      allCats[i].render();
    }
    console.log('allCats array after reinstantiating through our Cat constructor', allCats);
  }
};

catbutton.addEventListener('click', handleCatButtonClick);
