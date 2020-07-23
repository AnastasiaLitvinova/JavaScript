// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (применить switch).

let arg1 = +prompt('Enter arg1: '), arg2 = +prompt('Enter arg1: ')
const operation = prompt('Enter +, -, * or /: ')

function plus(arg1, arg2) {
	return arg1 + arg2
}
function minus(arg1, arg2) {
	return arg1 - arg2
}
function multiply(arg1, arg2) {
	return arg1 * arg2
}
function divide(arg1, arg2) {
	return arg1 / arg2
}

function mathOperation(arg1, arg2, operation) {
	switch (true) {
		case (operation == '+'):
				return plus(arg1, arg2)
				break
		case (operation == '-'):
				return minus(arg1, arg2)
				break
		case (operation == '*'):
				return multiply(arg1, arg2)
				break
		case (operation == '/'):
				return divide(arg1, arg2)
				break
	}

	return operation
}

console.log(mathOperation(arg1, arg2, operation))
