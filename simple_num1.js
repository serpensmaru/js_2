let num = Number(process.argv[2]);
// let num = 100000            // 100К
console.log(num);
let list_number = [];
let count, x, y;
count = list_number.length;
console.time("time")        // js = 4.37.455 (4 мин) | python = 6660 сек (111 мин)
x = 2;                      // стартовое число
while (count < num) {      // проверка длины массива по заданному количеству простых цифр которые надо получить
    y = 0;
    for (i=2; i <= x; i++) {        // начинаем делить с 2, т.к. стартовое число х = 2 и ограничение что делитель i меньше или равен делимому
        if (x % i == 0) {
            y++;
        };
        if (y > 1) {
            break;
        };                           // если y больше 1 то нам уже число не подходит
    };
    if (y == 1) {
        list_number.push(x);
    };
    x++;
    count = list_number.length;
    // console.log(count);
};
console.timeEnd("time");
console.log(list_number);
console.log(list_number.length)
    
console.log(list_number[list_number.length-1])



    


