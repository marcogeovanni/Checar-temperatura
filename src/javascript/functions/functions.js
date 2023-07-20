const myKey = '8a3c4b39917706bef320c727ea6dccdd'

function print(data) {
    console.log(data)

    document.querySelector('.city').innerHTML = 'Tempo em ' + data.name
    document.querySelector('.temperature').innerHTML =  Math.floor(data.main.temp) + '°C'
    document.querySelector('.description').innerHTML = data.weather[0].description
    document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
}

async function seek(city) {
    let data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + myKey + '&lang=pt_br' + '&units=metric')
    .then(response => response.json())
    print(data)
}

function cliqueiNoBotao() {
   let city = document.querySelector(".input").value

   seek(city)
}