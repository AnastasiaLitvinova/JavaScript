// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
let n = 2
let notSimple = 0

while ( n <= 100) {
    notSimple = isNatural(n)
    n++
}


function isNatural(number) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            return i++
        }
    }
    return console.log(number)
}
