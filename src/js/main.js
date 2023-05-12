import './lib/lib';

const div = $('.active');
div.addClass('hello', 'world');
div.removeClass('world');
div.toggleClass('world');
if (div.containsClass('active')) {
  console.log('da');
}

div.on('click', sayHello);
div.off('click', sayHello);
div.click(sayHello);

function sayHello() {
  console.log('Hello');
}

$('button').on('click', function () {
  $(this).toggleClass('active');
});
