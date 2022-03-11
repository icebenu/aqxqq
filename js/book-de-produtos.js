var accordionList = document.querySelectorAll('.js-accordion div');
var peixeBranco = document.querySelector('.peixe-branco');
var produtosListPeixeBranco = document.querySelector('.peixe-branco-produtos');
var salmao = document.querySelector('.salmao');
var produtosListSalmao = document.querySelector('.salmao-produtos');
var frutosDoMar = document.querySelector('.frutos-do-mar');
var produtosListFrutos = document.querySelector('.frutos-produtos');
var camarao = document.querySelector('.camarao');
var produtosListCamarao = document.querySelector('.camarao-produtos');
function activeTitle() {
    accordionList.forEach(function (section) {
        section.classList.remove('active-list');
    });
    this.classList.toggle('active-list');
    if (peixeBranco.classList.contains('active-list')) {
        produtosListPeixeBranco.classList.add('active-products');
        produtosListSalmao.classList.remove('active-products');
        produtosListFrutos.classList.remove('active-products');
        produtosListCamarao.classList.remove('active-products');
    }
    else if (salmao.classList.contains('active-list')) {
        produtosListPeixeBranco.classList.remove('active-products');
        produtosListSalmao.classList.add('active-products');
        produtosListFrutos.classList.remove('active-products');
        produtosListCamarao.classList.remove('active-products');
    }
    else if (frutosDoMar.classList.contains('active-list')) {
        produtosListPeixeBranco.classList.remove('active-products');
        produtosListSalmao.classList.remove('active-products');
        produtosListFrutos.classList.add('active-products');
        produtosListCamarao.classList.remove('active-products');
    }
    else if (camarao.classList.contains('active-list')) {
        produtosListPeixeBranco.classList.remove('active-products');
        produtosListSalmao.classList.remove('active-products');
        produtosListFrutos.classList.remove('active-products');
        produtosListCamarao.classList.add('active-products');
    }
}
accordionList.forEach(function (item) {
    item.addEventListener('click', activeTitle);
});
