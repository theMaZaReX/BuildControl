const reviews = document.querySelector('.reviews');
const reviewsRow = document.querySelector('.reviews__row');
const wrapperItems = document.querySelector('.reviews__items');
const reviewsItems = document.querySelectorAll('.reviews__item');
const reviewsCountItems = document.querySelectorAll('.reviews__item').length;
let step = 0;
let indexItem = 0;
let width = 100 * indexItem;
let start = (step * reviewsCountItems) * 100;
let maxWidth = start + width;
let onLastChild = false;



const init = function () {
    const switchButtons = document.createElement('div');
    switchButtons.classList.add('switch-buttons', 'reviews__switch-buttons')

    for (let i = 1; i <= reviewsCountItems; i++) {
        let item = document.createElement('span');
        item.classList.add('switch-buttons__btn');
        switchButtons.appendChild(item);
    }

    switchButtons.firstElementChild.classList.add('switch-buttons__btn--active');
    reviews.appendChild(switchButtons);
}

const findIndexItem = function (event, wrapperButtons) {
    indexItem = [...wrapperButtons.children].indexOf(event.target);
    return indexItem;
}

const indicate = function(switchBtn){
    switchBtn.forEach(function(elem){
        elem.classList.remove('switch-buttons__btn--active');
    })
    switchBtn[indexItem].classList.add('switch-buttons__btn--active');
}

const slideWrapp = function (switchBtn) {
    width = 100 * indexItem;
    start = (step * reviewsCountItems) * 100;
    maxWidth = start + width;
    wrapperItems.style.transform = `translateX(-${maxWidth}%)`;
    indicate(switchBtn);
    return start;
}

const slideElement = function (switchBtn) {
    let i = 0;
    while (i <= indexItem) {
        reviewsItems[i].style.transform = `translateX(${start}%)`
        i++;
    }
    indicate(switchBtn);
}




document.addEventListener('DOMContentLoaded', function (event) {
    if (reviewsCountItems) {
        init();

        const switchButtons = document.querySelector('.switch-buttons');
        const switchBtn = document.querySelectorAll('.switch-buttons__btn');

        switchBtn.forEach(function (elem) {
            elem.addEventListener('click', function (event) {
                findIndexItem(event, switchButtons);

                //если с последнего элемента кликнули на первый
                if ((indexItem == 0) && (onLastChild)) {
                    step++;
                    onLastChild = false;
                    slideWrapp(switchBtn);
                }
                // если попали на последний элемент
                if (indexItem == reviewsCountItems - 1) {
                    onLastChild = true;
                    slideWrapp(switchBtn);
                }
                else {
                    onLastChild = false;
                    slideWrapp(switchBtn);
                }

                if (start != 0) {
                    slideElement(switchBtn);
                }
            })
        })

    }

})