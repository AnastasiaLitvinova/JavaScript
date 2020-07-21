// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (применить switch).

let arg1 = +prompt(), arg2 = +prompt()
let divide, plus, multiply, minus // '/', '+', '*', '-'

console.log(arg1, arg2)

function mathDivide(arg1, arg2, divide) { // делит значения
	if (arg1 < 0 && arg2 < 0) { // если значения отрицательные
		return -arg1 > -arg2 ? arg1 / arg2 : arg2 / arg1
	} else if (arg1 >= 0 && arg2 < 0) { // если одно значение отрицательно
		return arg1 > -arg2 ? arg1 / arg2 : arg2 / arg1
	} else if (arg1 < 0 && arg2 >= 0) { // если другое значение отрицательно
		return -arg1 > arg2 ? arg1 / arg2 : arg2 / arg1
	} else if (arg1 >= 0  && arg2 >= 0) { // если значения положительные
		return arg1 > arg2 ? arg1 / arg2 : arg2 / arg1
	}
}
function mathPlus(arg1, arg2, plus) {
	return arg1 + arg2
}
function mathMultiply(arg1, arg2, multiply) {
	return arg1 * arg2
}
function mathMinus(arg1, arg2, minus) { // вычитает из большего меньшее
	return arg1 > arg2 ? arg1 - arg2 : arg2 - arg1
}

if ((arg1 && arg2 != 0) && ((arg1 % arg2 === 0) || (arg2 % arg1 === 0))) { // значения не равны 0 и делятся без остатка
	divide = mathDivide(arg1, arg2, divide)
	console.log('/') // выводит какая операция была произведена
	console.log(divide)
}
if ((arg1 < 0 && arg2 >= 0) || (arg1 >= 0 && arg2 < 0)) { // значения имеют разные знаки
	plus = mathPlus(arg1, arg2, plus)
	console.log('+')
	console.log(plus)
} else if (arg1 < 0 && arg2 < 0){ // если значения отрицательные
	multiply = mathMultiply(arg1, arg2, multiply)
	console.log('*')
	console.log(multiply)
} else if (arg1 >= 0  && arg2 >= 0) { // если значения положительные
	minus = mathMinus(arg1, arg2, minus)
	console.log('-')
	console.log(minus)
}  else {
	console.log('Заданные значения не подходят условиям')
}