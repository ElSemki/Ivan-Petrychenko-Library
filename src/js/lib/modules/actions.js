import $ from '../core';

// 1. Менять (получать) html структуру внутри элемента
$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      // Если контент передан - будем замещать контент внутри элемента
      this[i].innerHTML = content;
    } else {
      // Если контент не передан - то мы получаем содержимое этого элемента на странице
      return this[i].innerHTML;
    }
  }

  return this;
};

// 2. Получение определенного элемента по номеру
$.prototype.eq = function (i) {
  const swap = this[i];
  const objectLength = Object.keys(this).length;

  for (let i = 0; i < objectLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;

  return this;
};

// 3. Получение определенного элемента по селектору внутри уже найдных элементов
$.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;

  const objectLength = Object.keys(this).length;

  for (; numberOfItems < objectLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

// 4. Поиск элемента по порядку (которые имеют один селектор и общего родителя)
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

// 5. Определять ближайший блок по заданному селектору
$.prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }

  const objectLength = Object.keys(this).length;
  for (; counter < objectLength; counter++) {
    delete this[counter];
  }

  return this;
};

// 6. Получать все соседние элементы, не включая сам элемент
$.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;

  const objectLength = Object.keys(this).length;

  for (; numberOfItems < objectLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
