'use strict';

let data = localStorage.getItem('cats');
let normalObj = JSON.parse(data);
console.log(normalObj);
if (normalObj !== null) {
  for (let i = 0; i < normalObj.length; i++) {
    new Cat(normalObj[i].name);
    allCats[i].render();
  }
}

// if (normalObj !== null) {
//   allCats = normalObj;
//   for (let i = 0; i < allCats.length; i++) {
//     allCats[i].render();
//   }
// }

// if (localStorage.cats) {
//   let catsFromLS = JSON.parse(localStorage.cats);
//   allCats = catsFromLS;
//   for (let i = 0; i < allCats.length; i++) {
//     allCats[i].render();
//   }
// }
catform.addEventListener('submit', handleCatSubmit);
