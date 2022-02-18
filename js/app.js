var show_hide = document.querySelector('.js-botao-menu');

show_hide.onclick = function() {
    var menu_toggle = document.querySelector('.js-menu-lat');
    menu_toggle.classList.toggle('js-menu--show');
}