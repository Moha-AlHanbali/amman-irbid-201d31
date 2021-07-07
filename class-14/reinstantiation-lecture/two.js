'use strict';
let btnEl = document.getElementById('showList');

function showList() {
    let data = localStorage.getItem('std');
    let normalObj = JSON.parse(data);
    if (normalObj !== null) {
        // students = normalObj;
        // for (let i = 0; i < normalObj.length; i++) {
        //     students[i].render();
        // }

        for (let i = 0; i < normalObj.length; i++) {
            new Student(normalObj[i].stdName, normalObj[i].grade, normalObj[i].age);
            students[i].render();
        }
    }
}
btnEl.addEventListener('click', showList);