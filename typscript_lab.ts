interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {name: 'Killimanjaro',
    height: 19341},

    {name: 'Everest',
    height: 29029},
    
    {name:'Denali',
        height:20310
    }
]

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let height:number = 0
    let highest:string = ""
    for(let mountain of mountains){
        if (mountain.height> height){
            height = mountain.height
            highest = mountain.name
        }
    }
    return highest
}
let heighest = findNameOfTallestMountain(mountains)
console.log(heighest)


interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name: 'PS5 Stock X',
    price:  730
    },
    {name: 'PS5 Sams Club',
    price: 639.98
    },
    {name: 'PS5 ebay',
    price: 1000},
    {name: 'PS5 TecoBuy',
    price: 839}
]

function calcAverageProductPrice(products:Product[]):number{
    let sum = 0
    for(let product of products){
        sum += product.price
    }
    return sum/products.length
}

let productAvg = calcAverageProductPrice(products)

console.log(productAvg)

interface InventoryItem{
    product: Product;
    quantity: number;
}

const inventory =[
    {product:{name: 'motor',
    price: 10.00},
    quantity: 10},
    {product:{name: 'sensor',
    price: 12.50},
    quantity: 4},
    {product:
    {name: 'LED',
    price: 1.00},
    quantity: 20 
    }
]

function calcInventoryValue(inventory:InventoryItem[]):number{
    let sum = 0
    for(let item of inventory){
        sum += item.product.price * item.quantity
    }
    return sum
}

let inventoryTotal = calcInventoryValue(inventory)

console.log(inventoryTotal)