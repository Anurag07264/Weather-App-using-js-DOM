

async function getData(){
    
    var cityName = document.getElementById('cityInputNameId').value;
    var apiKey = "5a6f1d5f7962fc1d515daf48b4667d2e" ;
    var url= 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid='+apiKey;
    
    var response = await fetch(url);
    var data = await response.json();
    console.log(data);


    document.getElementById('cityNameOutput').innerHTML = "Weather details of " + cityName ;
    document.getElementById('temperatureId').innerHTML = "Temperature : " + data.main.temp;
    document.getElementById('humidity').innerHTML = "Humidity is : " +data.main.humidity +"%";
    document.getElementById('windSpeed').innerHTML = "Wind is blowing at "+ data.wind.speed + "km/h";
}


