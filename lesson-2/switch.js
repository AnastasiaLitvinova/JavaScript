let date = new Date()
const time = date.getHours() // Получить текущее время

switch (true) {
	case (time >= 6 && time <= 12):
		console.log('Good morning')
        break
    case (time >= 18 && time <= 0):
        console.log('Good evening')
        break
    case (time >= 0 && time <= 6):
        console.log('Good night')
        break
    case (time >= 12 && time <= 18):
        console.log('Good day')
        break
}