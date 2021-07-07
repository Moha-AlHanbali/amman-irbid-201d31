'use strict';
function getFromLocalStorage() {
    let data = localStorage.getItem('std');
    let normalObj = JSON.parse(data);

    if (normalObj !== null) {
        for (let i = 0; i < normalObj.length; i++) {
            new Student(normalObj[i].stdName, normalObj[i].grade, normalObj[i].age);
            students[i].render();
        }
        // students = normalObj;
        // console.log(students);
        // for (let i = 0; i < students.length; i++) {
        //     students[i].render();
        // }
    }
}
getFromLocalStorage();