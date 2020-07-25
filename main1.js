// 1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function transform () {
  let n = prompt('Введите число от 0 до 999') //число превратится в строку
  let arrN = n.split('') //разбить строку на массив
  let objN = {} //пустой объект
  
  function breakUp () { //заполнение объекта свойствами и значениями
    objN.сотни = +arrN[0]
    objN.десятки = +arrN[1]
    objN.единицы = +arrN[2]
  }
  
  if (arrN.length > 3) {
    console.log('Число превышает 999')
    console.log(objN)
  } else if (arrN.length < 3)  {
    for (let i = 0; i < arrN.length; i++) {
      arrN.unshift(0)
      if (arrN.length == 3) {
        break
      }
    }
    breakUp()
    console.log(objN)
  } else if (arrN.length == 3) {
      breakUp()
      console.log(objN)
    }
}

transform()