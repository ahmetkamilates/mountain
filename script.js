const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const dropDawnMenu = document.querySelector(".dropdawn_menu");

toogleBtn.onclick = function () {
    dropDawnMenu.classList.toggle('open');
    const isOpen = dropDawnMenu.classList.contains('open');

    toogleBtnIcon.classList =isOpen
    ? 'bi bi-x'
    : 'bi bi-list'
}