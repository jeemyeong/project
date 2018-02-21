$(document).ready(function() {
  var menu = $('.main-menu');
  var btn = $('.btn-menubar, .menubar');
  
  btn.on('click', function () {
    menu.toggleClass('menu-act');
  });
});