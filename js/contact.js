window.addEventListener('load', function (eventWindow) {
    var form = this.document.querySelector('.contact');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});
