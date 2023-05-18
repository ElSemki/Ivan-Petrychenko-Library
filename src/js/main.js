import './lib/lib';

$('#first').click(() => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button')
  .eq(2)
  .on('click', () => {
    $('.w-500').fadeToggle(800);
  });

$('#trigger').click(() => {
  $('#trigger').createModal({
    text: {
      title: 'Modal title #2',
      body: 'Loren ipsum text',
    },
    btns: {
      count: 2,
      settings: [
        ['Close', ['btn-danger', 'mr-10'], true],
        [
          'Save changes',
          ['btn-success'],
          false,
          () => alert('Данные сохранены'),
        ],
      ],
    },
  });
});

$()
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => console.log(res));
