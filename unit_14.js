let sel = document.createElement('select');
sel.classList.add('select');
document.querySelector('.btn').appendChild(sel);

var option3 = document.createElement('option');
option3.text = 'Antalya';
option3.value = 'antalya';
sel.add(option3);

var option1 = document.createElement('option');
option1.text = 'Istanbul';
option1.value = 'istanbul';
sel.add(option1);

var option2 = document.createElement('option');
option2.text = 'Ankara';
option2.value = 'ankara';
sel.add(option2);





let antalya = 'http://api.openweathermap.org/data/2.5/weather?id=323777&APPID=31e6e940b0fffc470093cf1f88dc987a';
let ankara = 'http://api.openweathermap.org/data/2.5/weather?id=323784&APPID=31e6e940b0fffc470093cf1f88dc987a';
let istanbul = 'http://api.openweathermap.org/data/2.5/weather?id=745044&APPID=31e6e940b0fffc470093cf1f88dc987a';
let city = antalya;

www();

sel.addEventListener(
    'change',
    function () {
        if (sel.value == 'istanbul') {
            city = istanbul;

        } else if (sel.value == 'ankara') {
            city = ankara;

        } else {
            city = antalya;

        }
        www();
    }
);



function www() {

    fetch(city)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.deg').innerHTML = Math.round(data.main.temp - 273) + '&deg';
            document.querySelector('.sky').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = 'скорость ветра' + '<br>' + data.wind.speed;
            document.querySelector('.icon').innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;

            let temp = Math.round(data.main.temp - 273);
            if (temp > 25) {
                document.querySelector('.feature').innerHTML = `<div style="font-size: 25px;">самое время искупаться</div>`;
            } else {
                document.querySelector('.feature').innerHTML = `<div style="font-size: 25px;">купаться уже холодно</div>`;
            }
        })



        .catch(function () {


        });

}






