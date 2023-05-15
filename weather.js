window.onload=getWeather();
function getWeather() {
   let city = "";
   if(document.getElementById("search").value.length!=0){
    city=document.getElementById("search").value;
   }
   else{
    city="jammu";
   }
   
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=838d170d19241e7aa864762caaa8ecdf&units=metric`;
   
   let City = document.getElementById("city");
   let humidity = document.getElementById("humidity");
   let temperature = document.getElementById("temperature");
   let wind = document.getElementById("wind");
 
   const promise = new Promise((resolve, reject) => {
     const weather = fetch(url);
     resolve(weather);
   });
   
   promise
     .then((response) => response.json())
     .then((data) => {
      if(data.name==undefined){
        City.textContent = data.message;
        temperature.textContent = "";
        humidity.textContent = "";
        wind.textContent = "";
      }
      else{
       City.textContent = `${data.name}`;
       temperature.textContent = `${data.main.temp}°C`;
       humidity.textContent = `${data.main.humidity}%`;
       wind.textContent = `${data.wind.speed} m/s`;
      }
     });
 
   document.getElementById("weather").style.display = "flex";
 }
	
