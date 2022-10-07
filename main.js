const items = document.querySelectorAll('.countdown-item > h4')
console.log(items)

// Назначаем дату отсчета
let countdownDate = new Date(2022, 11, 31, 23, 59, 59).getTime() // создаем новую дату. getTime - передаем значением в мс

function getCountDownTime() {
    // Получить текущее время
    const now = new Date().getTime()

    // Найти разницу времени
    const diff = countdownDate - now
    console.log(diff/24/60/60/1000)

    // 1c = 1000мс
    // 1м = 60с
    // 1ч = 60м
    // 1д = 24ч

    // Создаем переменные в милисекундах
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000 

    // Подсчет для дней часов, минут и секунд
    let days = Math.floor(diff / oneDay)
    let hours = Math.floor((diff % oneDay) / oneHour)
    let minutes = Math.floor((diff % oneHour / oneMinute))
    let seconds = Math.floor((diff % oneMinute / 1000))

    // Создаем массив с числами
    const values = [days, hours, minutes, seconds]

    // //Добавялем значения переменных на страницу
    items.forEach(function (item, index) {
        item.innerText = values[index]
    })

    if( diff < 1){
        clearInterval(start)
        items.forEach(function (item) {
            item.innerText = '0'
        })
        const container = document.querySelector('.container')
        const newElement = document.createElement('h1')
        newElement.innerText = 'Время вышло'
        container.append(newElement)
    }
}

const start = setInterval(getCountDownTime, 1000)
