import './lib/lib';

// const div = $('.active');
// div.addClass('hello', 'world');
// div.removeClass('world');
// div.toggleClass('world');
// if (div.containsClass('active')) {
//   console.log('da');
// }

// div.on('click', sayHello);
// div.off('click', sayHello);
// div.click(sayHello);

// function sayHello() {
//   console.log('Hello');
// }

// $('button').on('click', function () {
//   $(this).toggleClass('active');
// });

// console.log($('button').html('Hello'));

$('button').on('click', function () {
  $('div').eq(2).toggleClass('active');
});

// $('div').click(function () {
//   console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));

// console.log($('.more').eq(0).siblings());
$('button').fadeIn(1800);
