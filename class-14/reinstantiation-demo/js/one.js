'use strict';

if (localStorage.cats) {
  let catsFromLS = JSON.parse(localStorage.cats);
  allCats = catsFromLS;
  for (let i = 0; i < allCats.length; i++) {
    allCats[i].render();
  }
}

catform.addEventListener('submit', handleCatSubmit);
