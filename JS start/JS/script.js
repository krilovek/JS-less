
//===============ПЕРЕДВИЖЕНИЕ ПО DOM ==================

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


//querySelector - сразу берет элемент (его не надо доставать из коллекции как в случае с querySelectorAll)
const wrapperOne = document.querySelector('.wrapper');
// Запись вернет тоже самое что и 
const wrapperOneAll = document.querySelectorAll('.wrapper')[0];
console.log(wrapperOne);
console.log(wrapperOneAll);

//Еще варианты поиска (Важно именно getelements[S])
// Разница в том что он возвращает ЖИВУЮ коллекцию
const getByTagName = document.getElementsByTagName('li');

const getByClassName = document.getElementsByClassName('header__link');


// ================ПОЛУЧЕНИЕ И ИЗМЕНЕНИЕ============
/*
const textElement = document.querySelector('.content__text');
*/
//Получем содержимое объекта как есть вместе с HTML
/*
const textElementContent = textElement.innerHTML;
//console.log(textElementContent);
*/
//Изменяем содержимое
/*
textElement.innerHTML = "Живи, а работай в свободное время!";
//Дописываем содержимое объекта 
textElement.innerHTML =
    `<p>${textElementContent}</p> <p> Живи, а работай в 
    <span class="content__text_yellow"> свободное</span> время!</p>`;
console.log(textElement.innerHTML)
*/

// Содержимое элемента целиком (со всем его HTML) .outerHTML
/*
const textElement = document.querySelector('.content__text');
const textElementContent = textElement.outerHTML;
console.log(textElementContent);

textElement.outerHTML = `<p> Живи а работай в 
    <span class="content__text_yellow">свободное</span> время!</p>`;
*/
/*
// Создание элементов (тегов) .createElement('div')
const newElement = document.createElement('div');
//console.log(newElement)
//Его можно наполнить. Но существует он в константе(вне документа)
newElement.innerHTML = `<p> Живи а работай в 
<span class="content__text_yellow">свободное</span> время!</p>`;
*/
/*
//Вставка элементов или текста в HTML
//Сначала получаем объект
const textElement = document.querySelector('.content__text');
//Создаем новый элемент(тег)
const newElement = document.createElement('div');
//Теперь наполняем
newElement.innerHTML = `<p> Живи а работай в 
<span class="content__text_yellow">свободное</span> время!</p>`;
//И варианты вставки
//Перед элементом:
textElement.before(newElement);
//После элемента:
textElement.after(newElement);
//Внутри и в начале:
textElement.prepend(newElement);
//Внутри и в конце
textElement.append(newElement);
//Таким образом вставляются только Элементы или текст, Для вставки HTML кода используется другой метод
*/

const textElement = document.querySelector('.content__text');
textElement.insertAdjacentHTML(
    `afterend` //Отвечает куда именно будет вставленн код
    `<p> Живи, а работай в свободное время</p>`
);

