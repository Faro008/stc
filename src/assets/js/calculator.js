const buttomColor = document.querySelectorAll('input[name="mosqitos-color"]');
const itemColor = document.querySelector('.container__mosqitos svg rect:first-child');
const buttomType = document.querySelectorAll('input[name="mosqitos-type"]');
const heightItem = document.querySelector('#height');
const widthItem = document.querySelector('#width');
const el = document.querySelectorAll(".input");
const mosqitosServices = document.querySelector('#mosqitos-services');
const mosqitosDelivery = document.querySelector('#mosqitos-delivery');
const itemControl = document.querySelectorAll('input[name="item-controls"]');
//маска ввода цифр
el.forEach(update);

function update(item) {
    item.addEventListener('input', function () {
        var n = item.value.replace(/[^0-9]/g, '').split('').reverse();
        n.length = 4;
        item.value = n.reverse().join('');
    });
}
//калькулятор
function calc() {
    itemControl.forEach((item) => {
        item.addEventListener('click', function () {
            var counter;
            let itemControlPlus = this;
            const counterContainer = itemControlPlus.closest('.container__counter__item');
            counter = counterContainer.querySelector('[data-counter]');
            if (itemControlPlus.dataset.action === 'plus') {
                counter.value = ++counter.value
            }
            if (itemControlPlus.dataset.action === 'minus') {
                if (parseInt(counter.value) > 1) {
                    counter.value = --counter.value
                }
            }
        });
        document.querySelector('input[data-action="plus"]').click();
        buttomColor.forEach((item) => {
            item.addEventListener('click', function () {
                let currentItemColor = this.value;
                document.querySelector('.color__text').innerText = this.getAttribute('data-color');
                itemColor.style.fill = currentItemColor;
                switch (currentItemColor) {
                case '#ffffff':
                    kef = 1;
                    break
                case '#54341b':
                    kef = 1.5;
                    break
                };
            });
            document.querySelector('input[name="mosqitos-color"]').click();
            buttomType.forEach((item) => {
                item.addEventListener('click', function () {
                    document.querySelector('.type__text').innerText = item.getAttribute("data-type");
                    let currentMosqitosServices = +mosqitosServices.value;
                    let currentMosqitosDelivery = +mosqitosDelivery.value;
                    let currentButtomType = +this.value;
                    document.querySelector('#form').addEventListener('input', myFunction);
                    document.querySelector('#form').addEventListener('click', myFunction);

                    function myFunction() {
                        let currentWidth = +widthItem.value;
                        let currentHeight = +heightItem.value;
                        if (currentHeight < 200 || currentWidth < 200) {
                            let priceItem = 0;
                            document.querySelector('.price__total').innerText = 0;
                            document.querySelector('.price__delivery').innerText = 0;
                            document.querySelector('.price__services').innerText = 0;
                            document.querySelector('.area__text').innerText = 0;
                            document.querySelector('.price__text').innerText = 0;
                            //Предупреждение о не допустимых размерах
                            heightItem.addEventListener("input", function () {
                                currentHeight = +heightItem.value;
                                if (currentHeight < 200 && currentHeight > 0) {
                                    document.querySelector('._height-alert').classList.add("_show");
                                }
                                else {
                                    document.querySelector('._height-alert').classList.remove("_show");
                                }
                            });
                            widthItem.addEventListener("input", function () {
                                currentWidth = +widthItem.value;
                                if (currentWidth < 200 && currentWidth > 0) {
                                    document.querySelector('._width-alert').classList.add("_show");
                                }
                                else {
                                    document.querySelector('._width-alert').classList.remove("_show");
                                }
                            });
                        }
                        else {
                            if (mosqitosServices.checked) {
                                currentMosqitosServices = +mosqitosServices.value;
                            }
                            else {
                                currentMosqitosServices = 0;
                            }
                            if (mosqitosDelivery.checked) {
                                currentMosqitosDelivery = +mosqitosDelivery.value;
                                if (mosqitosServices.checked) {
                                    currentMosqitosDelivery = +currentMosqitosDelivery / 2;
                                }
                            }
                            else {
                                currentMosqitosDelivery = 0;
                            }
                            if (document.querySelector('#mosqitos-type-cat').checked || document.querySelector('#mosqitos-type-pollen').checked) {
                                document.querySelector('._none__show').classList.add('_no__show');
                                currentMosqitosServices = 0;
                                currentMosqitosDelivery = 0;
                            }
                            else {
                                document.querySelector('._none__show').classList.remove('_no__show');
                            }
                            document.querySelector('.price__delivery').innerText = currentMosqitosDelivery;
                            document.querySelector('.price__services').innerText = currentMosqitosServices;
                            document.querySelector('.height__text').innerText = currentHeight;
                            document.querySelector('.width__text').innerText = currentWidth;
                            let areaItem = +(currentWidth * currentHeight) / 1000000;
                            let count = +document.querySelector('[data-counter]').value;
                            if (areaItem >= 1) {
                                let priceItem = areaItem * currentButtomType * kef;
                                document.querySelector('.area__text').innerText = areaItem;
                                document.querySelector('.price__text').innerText = priceItem;
                                let mosqitosTotalPrice = (priceItem + currentMosqitosDelivery + currentMosqitosServices) * count;
                                document.querySelector('.price__total').innerText = mosqitosTotalPrice;
                            }
                            else {
                                let priceItem = 1 * currentButtomType * kef;
                                document.querySelector('.area__text').innerText = areaItem;
                                document.querySelector('.price__text').innerText = priceItem;
                                let mosqitosTotalPrice = (priceItem + currentMosqitosDelivery + currentMosqitosServices) * count;
                                document.querySelector('.price__total').innerText = mosqitosTotalPrice;
                            }
                        }
                        //активация кнопки "Добавить заявку"
                        let priceTotal = +document.querySelector('.price__total').innerText;
                        const buttonAdd = document.querySelector('.container__button__add');
                        if (priceTotal > 0) {
                            buttonAdd.classList.add("_active")
                            buttonAdd.onmouseover = function () {
                                document.querySelector('._button-alert').classList.remove("_show");
                            };
                        }
                        else {
                            buttonAdd.classList.remove("_active");
                            buttonAdd.onmouseover = function () {
                                document.querySelector('._button-alert').classList.add("_show");
                            };
                            buttonAdd.onmouseout = function () {
                                document.querySelector('._button-alert').classList.remove("_show");
                            };
                        }
                    };
                });
                document.querySelector('input[name="mosqitos-type"]').click();
            });
        });
    });
    //добавление товаров в заявку

    document.querySelector('.container__button__add').addEventListener('click', function () {
        let service;
        let delivery;
        if (+document.querySelector('.price__services').innerText === 0) {
            service = 'Нет'
        }
        else {
            service = 'Есть'
        }
        if (+document.querySelector('.price__delivery').innerText === 0) {
            delivery = 'Нет'
        }
        else {
            delivery = 'Есть'
        }
        const info = {
            price: document.querySelector('.price__total').innerText
            ,
            counter: document.querySelector('[data-counter]').value,
            height: document.querySelector('#height').value
            , width: document.querySelector('#width').value
            , color: document.querySelector('.color__text').innerText
            , type: document.querySelector('.type__text').innerText
            , service: service
            , delivery: delivery
        , }
        let deleteInfo = 'удалить';
       // let numberInfo = document.querySelectorAll('#info-number');
        //for (i = 0; i < numberInfo; i++) {};
        // <li id="info-number">${++numberInfo.length}</li>
        const requestHTML = `<ul>
                        <li data-total='delete' id="info-number">${deleteInfo}</li>

                        <li id="info-counter">${info.counter}</li>
                        <li id="info-type">${info.type}</li>
                        <li id="info-color">${info.color}</li>
                        <li id="info-size">${info.width + 'x' + info.height}</li>
                        <li id="info-delivery">${info.delivery}</li>
                        <li id="info-service">${info.service}</li>
                        <li id="info-price">${info.price}</li>
                    </ul>`;
        document.querySelector('.container__request').insertAdjacentHTML('beforeend', requestHTML);
        // Проверка типа изделия
        const matchType = document.querySelectorAll('#info-type');
        matchType.forEach((item) => {
            let matchSerch = item.innerText;
            if (matchSerch.match(/анти/g)) {
                document.querySelector('.requestTotaldelivery').innerText = 750;
            }
            else {
                document.querySelector('.requestTotaldelivery').innerText = 0;
            }
        });
        let priceInfo = document.querySelectorAll('#info-price');
        let requestTotalPrice = 0;
        let Totaldelivery = +document.querySelector('.requestTotaldelivery').innerText;
        priceInfo.forEach(total);
            function total(item){
            requestTotalPrice += +item.innerText;
            let requestPrice = requestTotalPrice + Totaldelivery;
            document.querySelector('.requestTotalPrice').innerText = requestPrice;
        };


    });
 window.addEventListener('click', function (event){

        if(event.target.dataset.total === 'delete'){
            event.target.closest('ul').remove();
             // Проверка типа изделия
        const matchType = document.querySelectorAll('#info-type');
        matchType.forEach((item) => {
            let matchSerch = item.innerText;
            if (matchSerch.match(/анти/g)) {
                document.querySelector('.requestTotaldelivery').innerText = 750;
            }
            else {
                document.querySelector('.requestTotaldelivery').innerText = 0;
            }
        });
let priceInfo = document.querySelectorAll('#info-price');
        let requestTotalPrice = 0;
        let Totaldelivery = +document.querySelector('.requestTotaldelivery').innerText;
        priceInfo.forEach(total);
            function total(item){
            requestTotalPrice += +item.innerText;
            let requestPrice = requestTotalPrice + Totaldelivery;
            document.querySelector('.requestTotalPrice').innerText = requestPrice;
        };

        };

    });


};
//calc();
