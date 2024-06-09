
/*
// Получаем текущий URL страницы
var currentPageUrl = window.location.href;
// Используем объект URL для разбора URL
var urlObject = new URL(currentPageUrl);
// Получаем часть пути (path) из URL
var path = urlObject.pathname;
// Удаляем начальный слеш, если он есть
var relativePath = path.startsWith('/') ? path.substring(1) : path;
// Выводим результат в консоль
console.log(relativePath);
// Получаем все элементы ссылок на странице
var linkElements = document.querySelectorAll('.container__popup__menu__nav>ul>li>a');
// Проходим по каждому элементу ссылки
for (var i = 0; i < linkElements.length; i++) {
    // Получаем значение атрибута href у текущего элемента
    var linkHref = linkElements[i].getAttribute('href');
    //console.log(linkHref);

    // Проверяем, содержится ли фиксированная часть в текущем URL ссылки
    var isMatch = linkHref && linkHref.startsWith(relativePath);

    // Выводим результат в консоль
    //console.log('Link ' + (i + 1) + ': ' + isMatch);
        // Если условие истинно, присваиваем класс "active" родительскому элементу <li>
    if (isMatch) {
        var parentLi = linkElements[i].parentNode;
        if (parentLi.tagName.toLowerCase() === 'li') {
            parentLi.classList.add('_active');
        }
    }
}*/




// Получаем текущий URL страницы
var currentPageUrl = window.location.href;

// Используем объект URL для разбора URL
var urlObject = new URL(currentPageUrl);

// Получаем часть пути (path) из URL
var path = urlObject.pathname;

// Удаляем начальный слеш, если он есть
var relativePath = path.startsWith('/') ? path.substring(1) : path;

// Выводим результат в консоль
//console.log(relativePath);

// Получаем все элементы ссылок на странице
var linkElements = document.querySelectorAll('.container__popup__menu__nav>ul>li>a');

// Флаг для проверки, является ли текущая страница главной
var isMainPage = relativePath === '';

// Проходим по каждому элементу ссылки
for (var i = 0; i < linkElements.length; i++) {
    // Получаем значение атрибута href у текущего элемента
    var linkHref = linkElements[i].getAttribute('href');

    // Проверяем, содержится ли фиксированная часть в текущем URL ссылки
    var isMatch = linkHref && linkHref === relativePath;

    // Если условие истинно, присваиваем класс "active" родительскому элементу <li>
    if (isMatch || (isMainPage && linkHref === '/')) {
        var parentLi = linkElements[i].parentNode;
        if (parentLi.tagName.toLowerCase() === 'li') {
            parentLi.classList.add('_active');
        }
    }
}







