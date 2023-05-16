import $ from '../core';

// Техническая функция, которая занимается запуском анимации
$.prototype.animateOverTime = function (duration, callback, fin) {
  // Создаем функцию, которая будет запускаться до определенного условия
  // Вычисляем время начала анимации и постоянно его сравниваем с тем временем, который передали в аргумент (duration)
  let timeStart;

  function _animateOverTime(time) {
    // Функция будет запускаться каждый раз через определенный промежуток времени, который решает браузер. У нас каждый раз функция будет получать аргумент time, мы его не можем контролировать, оно приходит автоматически.

    // Установка врмененного промежутка
    if (!timeStart) {
      timeStart = time;
    }

    // Вычисляем сколько времени прошло. Переменная отслеживает выполнение анимации. Мы берем то время, которое каждый раз изменяется и каждый раз отнимаем начало анимации. И это позволит отслеживать прогресс.
    let timeElapsed = time - timeStart;

    // Изменение параметров на странице (opacity) при помощи временных промежутков
    let copmlection = Math.min(timeElapsed / duration, 1);

    // Запускается после запуска анимации
    callback(copmlection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(duration, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

$.prototype.fadeOut = function (duration, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(duration, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};
