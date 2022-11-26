let num = Number(process.argv[2]);
//let num = 100000            // 100К
console.log(num);


function create_list(start, end) {  // создание последовательности [start, end]
    let list = []
    for (i=start; i<=end; i++) {
        list.push(i)
    }
    return list
}
function get_simple_num(l) {
    let list_limit = []
    for (k of l) { 
        let y = 0
        for (i=2; i<=k; i++) {
            if (k % i == 0) {
                y++
            }
            if (y > 1) { break }
        }
        if (y==1) { 
            list_limit.push(k)
        }
    }
    return list_limit
}

start = 1
end = 100

let list_simple = []
let count = list_simple.length
let limit = []
let g = 0
console.time("time")                        // js = 0.8 секунд | python = 2 мин
while (count < num) {
    let l_piece = create_list(start, end)   // получаем последоваельность натуральных чисел
    
    // console.log(l_piece)
    // Цикл ниже ищет число лимит, до которого нужно делить по алгоритму эратосфера x**2 < чем max(последовательности)
    for (k of l_piece){ 
        if (k**2 < l_piece[l_piece.length-1]) {
            limit.push(k)
        }
    }

    let list_limit = get_simple_num(limit)   // получаем из сипска до лимита просты числа
    // console.log(list_limit)

    let list_delete = []
    for (k of l_piece) {
        let x = !list_limit.includes(k)
        if (x) {
            for (d of list_limit) {
                if (k % d == 0) {
                    list_delete.push(k)
                }
            }
        }
    }        
    // console.log(list_delete)
    let difference = l_piece.filter(x => !list_delete.includes(x));  // посмотрел в интернете как делать разницу массивов
    // console.log(difference)
 
    list_simple = list_simple.concat(difference)

    start = start + 100
    end = end + 100

    count = list_simple.length
    // console.log(count)
}

let res = list_simple.slice(1, num+1)
console.timeEnd("time");
console.log(res)
console.log(list_simple[list_simple.length-1])
