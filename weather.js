function getWeather() {
   const city = document.getElementById("search").value;
   const apiKey = "838d170d19241e7aa864762caaa8ecdf";
 
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
       City.textContent = `${data.name}`;
       temperature.textContent = `${data.main.temp}`;
       humidity.textContent = `${data.main.humidity}`;
       wind.textContent = `${data.wind.speed}`;
     });
 
   document.getElementById("weather").style.display = "flex";
 }
	