//Обращение к основнм блокам документа(Вход) document.
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(bodyElement);


//ВСЕ елементы внутри блока .children
const childNode = bodyElement.children; 
console.log(childNode);

/* передвижение по DOM:
    firstElemenChild
    lastElementChild
    nextElementSibling
    previousElementSibling
    parentElement
*/

//Поиск элементов
//По селектору класса 
// document.querySelectorAll('.class__name')
const elemsOne = document.querySelectorAll('.wrapper');
console.log(elemsOne);

//По селектору тега
// document.querySelectorAll('tag')
const elemsTwo = document.querySelectorAll('section');
console.log(elemsTwo);

//По селектору тега и класса
// document.querySelectorAll('tag.class__name')
const elemsThree = document.querySelectorAll('section.galery');
console.log(elemsThree);

//По тегу первого уровня вложенности
// document.querySelectorAll('class__name>tag')
const elemsFours = document.querySelectorAll('.header__nav>ul');
console.log(elemsFours);

// По вложенным классам
// document.querySelectorAll('.class__name .class__name')
const elemsFive = document.querySelectorAll('.wrapper .main');
console.log(elemsFive);

// .querySelectorAll - это статичная коллекция
//Можно брать определенный элемент элемент
const elem = document.querySelectorAll("section");
console.log(elem[1]);

//Можно перебирать с помощью цикла FOR
for (const item of elem) {
    console.log(item);
} // Или стрелочной функции =>
/* elem.forEach(item => {
    console.log(item);
}) */


// Искать можно не только в DOCUMENT 
// [0] - для того что бы звять первый элемент из списка
// wrapperList (он там всего один)
const wrapperList = document.querySelectorAll('.wrapper');
const wrapperElement = wrapperList[0].querySelectorAll('section');
console.log(wrapperElement);
