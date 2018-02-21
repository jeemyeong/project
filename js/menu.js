$(document).ready(function() {
  var menu = $('.main-menu');
  var container = $('.menubar-container')
  var btn = $('.btn-menubar, .menubar');
  
  btn.on('click', function () {
    menu.toggleClass('menu-act');
    container.toggleClass('menubar-act');
  });
});