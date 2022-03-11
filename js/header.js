const body = document.querySelector('body')

const botoesMenu = document.querySelectorAll('.menu-burguer');
botoesMenu.forEach(botao => {
    botao.addEventListener('click', ()=> {
        console.log('CLICK CLICK!!')
        document.querySelector('.category-list ul').classList.toggle('active');
        body.classList.toggle('noScroll')
    })
});


const lupa = document.querySelector('.search .toggleSearch')
const closeSearch = document.querySelector('.closeSearch')
const inputSearch = document.querySelector('.search input')
const botaoSearch = document.querySelector('a.toggleSearch')
const overlaySearch = document.querySelector('.search .overlay')

botaoSearch.addEventListener('click', ()=> {
    closeSearch.classList.add('active')
    inputSearch.classList.add('active')
    overlaySearch.classList.add('active')

    lupa.classList.add('active')
    lupa.classList.remove('toggleSearch')

    body.classList.add('noScrollMobile')
})

closeSearch.addEventListener('click', ()=>{
    closeSearch.classList.remove('active')
    inputSearch.classList.remove('active')
    overlaySearch.classList.remove('active')
    
    lupa.classList.remove('active')
    lupa.classList.add('toggleSearch')
    
    body.classList.remove('noScrollMobile')
})