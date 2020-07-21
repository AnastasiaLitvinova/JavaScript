// 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
let a = +prompt(), b = +prompt()

function plus(a, b) {
	return a + b
}
let result = plus(a, b)
console.log( result )

function minus(a, b) {
	return a - b
}
result = minus(a, b)
console.log( result )

function multiply(a, b) {
	return a * b
}
result = multiply(a, b)
console.log( result )

function divide(a, b) {
	return a / b
}
result = divide(a, b)
console.log( result )