// Классы
import $ from '../core';

// Добавление классов элементу
$.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...classNames);
  }

  return this;
};

// Уаление классов у элемента
$.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classNames);
  }

  return this;
};

// Toggle
$.prototype.toggleClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(classNames);
  }

  return this;
};

// Contains
$.prototype.containsClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.contains(classNames);
  }

  return this;
};
