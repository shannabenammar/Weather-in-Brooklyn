/*
README
-------------------------------------------
Uses OpenWeatherMaps API through endpoint URL.

Accesses it through a loadJson function which allows
for a HTTP request. If the request fails it prints out 
an errot message.

The endpoint Url used requires an API Key that is connected
to my personal account and subscription with the 
openWeatherMap Website.
Along with a key it requires a specified city name for specified 
weather information.
Once all the information is provided and endpoint is successfully executed 
then a JSON file displayed with the accessed information. 

To access and parse information, it is necessary to go in order
of the the objects it is displayed under.


*/


function loadJSON(path, success, error){
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=d839010362302db71e7fb7bbfecde376',
         function(data) { 
          var cityName = data.name;
          var weatherDes = data.weather[0].description;
          var latCoord = data.coord.lat;
          var longCoord = data.coord.lon;
          var temp = data.main.temp;
          var tempFeel = data.main.feels_like;
          var tempMax = data.main.temp_max;
          var tempMin = data.main.temp_min;
          var humidty = data.main.humidity;
          var pressure = data.main.pressure;
          var windSpeed = data.wind.speed;
  
          console.log(data);
          console.log(cityName);
          console.log(weatherDes);
          console.log(latCoord);
          console.log(longCoord);
          console.log(temp);
          console.log(tempFeel);
          console.log(tempMax);
          console.log(tempMin);
          console.log(humidty);
          console.log(pressure);
          console.log(windSpeed);
  
     document.body.style.backgroundColor = "blue";
     document.body.innerHTML = "<h1>The weather for " + cityName + " : </h1>" 
       + "<p> <li>Expected: " + weatherDes + "</li>" 
       + "<li> Latitude coordinate: " + latCoord + "</li>"
       + "<li> Longitude coordinate: " + longCoord + "</li>"
       + "<li> Tempature: " + Math.floor((((temp-273.15)*1.4)+32)) + "</li>"
       + "<li> Feels like: " + Math.floor((((tempFeel-273.15)*1.4)+32)) + "</li>"
       + "<li> Max Tempature: " + Math.floor((((tempMax-273.15)*1.4)+32)) + "</li>"
       + "<li> Min Tempature: " + Math.floor((((tempMin-273.15)*1.4)+32)) + "</li>"
       + "<li> Humidity: " + humidty + "%</li>"
       + "<li> Pressure: " + pressure + "</li>"
       + "<li> Wind Speed: " + windSpeed + "</li>"
       + "</p>"
  
          },
         function(xhr) { console.error(xhr); }
);
