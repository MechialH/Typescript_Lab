var mountains = [
    { name: 'Killimanjaro',
        height: 19341 },
    { name: 'Everest',
        height: 29029 },
    { name: 'Denali',
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var height = 0;
    var highest = "";
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > height) {
            height = mountain.height;
            highest = mountain.name;
        }
    }
    return highest;
}
var heighest = findNameOfTallestMountain(mountains);
console.log(heighest);
var products = [
    { name: 'PS5 Stock X',
        price: 730
    },
    { name: 'PS5 Sams Club',
        price: 639.98
    },
    { name: 'PS5 ebay',
        price: 1000 },
    { name: 'PS5 TecoBuy',
        price: 839 }
];
function calcAverageProductPrice(products) {
    var sum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        sum += product.price;
    }
    return sum / products.length;
}
var productAvg = calcAverageProductPrice(products);
console.log(productAvg);
var inventory = [
    { product: { name: 'motor',
            price: 10.00 },
        quantity: 10 },
    { product: { name: 'sensor',
            price: 12.50 },
        quantity: 4 },
    { product: { name: 'LED',
            price: 1.00 },
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var sum = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        sum += item.product.price * item.quantity;
    }
    return sum;
}
var inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);
