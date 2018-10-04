function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;

    this.message = '';

    this.ingridientsLength = this.stuffing.length;
}

/**
 * Объекты ингридиентов
 * name Название ингридиенты
 * price Цена
 * calories Калории
 */
Hamburger.SIZE_SMALL = {
    name: 'small',
    price: 50,
    calories: 20,
};
Hamburger.SIZE_LARGE = {
    name: 'large',
    price: 100,
    calories: 40,
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20,
};
Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5,
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10,
};
Hamburger.TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    calories: 5,
};
Hamburger.TOPPING_SPICE = {
    name: 'spice',
    price: 15,
    calories: 0,
};

/**
 * Добавляет топпинги (можно нескеолько)
 * @param toppings Массив топпингов, которые мы передаём
 */
Hamburger.prototype.addTopping = function (toppings) {
    // Проходимся по списку переданных топингов, если есть одинаковые, удаляем их
    for (var i = 0; i < toppings.length; i++) {
        for (var j = i + 1; j < toppings.length; j++) {
            if (toppings[i].name === toppings[j].name) {
                this.message += `Ingridient "${toppings[j].name}" has already been in the stuffing \n`;
                toppings.splice(j, 1);
            }
        }
    }

    // Передаём отредактированный список топпингов в состав гамбургера
    for (var i = 0; i < toppings.length; i++) {
        this.stuffing.push(toppings[i]);
    }
}

/**
 * Удаляет топпинг
 * @param topping название топпинга который надо удалить
 */
Hamburger.prototype.removeTopping = function (topping) {
    // Проходимся по массиву ингридиентов, если нашли совпадение по имени, то удаляем ингридиент
    for (var i = 0; i < this.stuffing.length; i++) {
        if (this.stuffing[i].name === topping.name) {
            this.stuffing.splice(i, 1);

            // Выходим из цикла
            return;
        }
    }

    this.message += `Unable to remove an "${topping.name}", it is missing \n`;
}

/**
 * Возвращает список топпингов
 * toppingsArr Массив топпингов
 */
Hamburger.prototype.getToppings = function () {
    // Создаём массив куда запишем список топпингов, который потом вернем
    var toppingsArr = [];

    // Проходимся по массиву ингридиентов начиная с позиции, где начинаются топпинги
    for (var i = this.ingridientsLength; i < this.stuffing.length; i++) {
        toppingsArr.push(this.stuffing[i].name);
    }

    return toppingsArr;
}

/**
 * Возвращает размер бургера
 * this.size.name Размер бургера
 */
Hamburger.prototype.getSize = function () {
    return this.size.name;
}

/**
 * Возвращает начальные ингридиенты, без топпингов
 * ingridientsArr Список ингридиентов
 */
Hamburger.prototype.getStuffing = function () {
    // Создаём массив куда запишем список ингридиентов, который потом вернем
    var ingridientsArr = [];

    // Проходимся по массиву ингридиентов начиная до позиции, где начинаются топпинги
    for (var i = 0; i < this.ingridientsLength; i++) {
        ingridientsArr.push(this.stuffing[i].name);
    }

    return ingridientsArr;
}

/**
 * Рассчитывает стоимость бургера
 * price Полная стоимость бургера
 */
Hamburger.prototype.calculatePrice = function () {
    var price = 0;

    // Проходимся по списку всех ингридиентов, получаем их стоимости и добавляем к общей сумме
    for (var i = 0; i < this.stuffing.length; i++) {
        price += this.stuffing[i].price;
    }

    // Добавляем стоимость булки
    price += this.size.price;

    return price;
}

/**
 * Рассчитывает калорийность бургера
 * calories Полная калорийность бургера
 */
Hamburger.prototype.calculateCalories = function () {
    var calories = 0;

    // Проходимся по списку всех ингридиентов, получаем их калорийность и добавляем к общей калорийности
    for (var i = 0; i < this.stuffing.length; i++) {
        calories += this.stuffing[i].calories;
    }

    // Добавляем калорийность булки
    calories += this.size.calories;

    return calories;
}

/**
 * Возвращает ошибки при работе с бургером
 */
function HamburgerException() {
    return hamburger.message;
}