good = [
    {   id: 1,
        name: "Футболка",
        description: "Черная",
        sizes: ["s", "m", "l",],
        price: "400",
        available: true,
    },
    {   id: 2,
        name: "Рубашка",
        description: "Черная",
        sizes: ["s", "m", "l",],
        price: "600",
        available: true,
    },
    {   id: 3,
        name: "Кардиган",
        description: "Черная",
        sizes: ["s", "m", "l",],
        price: "600",
        available: true,
    },
    {   id: 4,
        name: "Куртка",
        description: "Черная",
        sizes: ["s", "m", "l",],
        price: "4600",
        available: true,
    },
    {   id: 5,
        name: "Свитер",
        description: "Черная",
        sizes: ["s", "m", "l",],
        price: "700",
        available: true,
    },
]

// cart = [
//     {good: good[0], amount: 3},
//     {good: good[1], amount: 2},
// ]


function find_product_on_id(id_product, bd=good) {
    for (let obj of bd) {
        if (obj.id == id_product) {
            return obj
        }
    }
}


function add_product_in_cart(id_product, count=1, cart=cart, bd=good) {  // добавляет товар в коризину с указанием его количества
    product = find_product_on_id(id_product)
    if (typeof product !== 'undefined') {
        let item = {good: product, amount: count} 
        cart.push(item)
        return cart                         // возвращает корзину
    }
}

function delete_product(id_product, cart=cart) {
    product = find_product_on_id(id_product)
    if (typeof product !== 'undefined') {
        for (p in cart) {
            // console.log(p)
            if (product == cart[p].good) {
                cart.splice(p, 1)
                return cart
            }
        }   
    }    
}

function clear_cart(cart=cart) {
    n = cart.length
    cart.splice(0, n)
    return cart
}

function summ_amount(cart) {
    let s = 0
    for (product of cart) {
        s = s + product.amount
    }
    return s
}

function summ_price(cart) {
    let s = 0
    for (product of cart) {
        s = s + Number(product.good.price)
    }
    return s
}

function result_cart(cart) {
    s_price = summ_price(cart)
    s_amount = summ_amount(cart)
    return {totalAmount: s_amount,
            totalSumm: s_price,        
    }
}


let cart = []       // корзина

add_product_in_cart(1, 2, cart)
add_product_in_cart(2, 3, cart)
// delete_product(2, cart)
// clear_cart(cart)
let res = result_cart(cart)
console.log(res)
// console.log(cart)


