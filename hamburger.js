function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;

    this.message = '';

    this.ingridientsLength = this.stuffing.length;
}

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

Hamburger.prototype.addTopping = function (toppings) {
    for (var i = 0; i < toppings.length; i++) {
        for (var j = i + 1; j < toppings.length; j++) {
            if (toppings[i].name === toppings[j].name) {
                this.message += `Ингридиент ${toppings[j]} уже есть `;
                toppings.splice(j, 1);
            }
        }
    }

    for (var i = 0; i < toppings.length; i++) {
        this.stuffing.push(toppings[i]);
    }
}

Hamburger.prototype.removeTopping = function (topping) {
    for (var i = 0; i < this.stuffing.length; i++) {
        if (this.stuffing[i].name === topping.name) {

            this.stuffing.splice(i, 1);
        }
    }
}

Hamburger.prototype.getToppings = function () {
    var toppingsArr = [];

    for (var i = this.ingridientsLength; i < this.stuffing.length; i++) {
        toppingsArr.push(this.stuffing[i].name);
    }

    return toppingsArr;
}

Hamburger.prototype.getSize = function () {
    return this.size.name;
}

Hamburger.prototype.getStuffing = function () {
    var ingridientsArr = [];

    for (var i = 0; i < this.ingridientsLength; i++) {
        ingridientsArr.push(this.stuffing[i].name);
    }

    return ingridientsArr;
}

Hamburger.prototype.calculatePrice = function () {
    var price = 0;

    for (var i = 0; i < this.stuffing.length; i++) {
        price += this.stuffing[i].price;
    }

    price += this.size.price;

    return price;
}

Hamburger.prototype.calculateCalories = function () {
    var calories = 0;

    for (var i = 0; i < this.stuffing.length; i++) {
        calories += this.stuffing[i].calories;
    }

    calories += this.size.calories;

    return calories;
}