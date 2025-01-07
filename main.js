// Hàm
function copy(classOne, classTwo) {
    const tempOne = document.querySelector(`.${classOne}`);
    const tempTwo = document.querySelector(`.${classTwo}`);
    if (tempOne && tempTwo) {
        tempTwo.innerHTML = tempOne.innerHTML;
    } else {
        console.error("One of the elements was not found");
    }
}
// Sủ dụng

copy("navbar__list", "navbar__list--tablet");

copy("footer-list","footer__list-tablet");