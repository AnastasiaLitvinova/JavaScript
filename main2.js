// 2) Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

const prices = {
  'systemUnit': 41500,
  'keyboard': 2450,
  'monitor': 6300,
  'mouse': 520,
  'speakers': 1500,
}

const arr = Object.values(prices)

const result = arr.reduce(function (accum, currentValue) {
  return accum + currentValue
}, 0)

console.log(result) //52270
