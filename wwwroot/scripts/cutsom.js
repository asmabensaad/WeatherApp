window.checkWeather = (cityName) => {
    //let weatherCityName = document.getElementById("weatherCity").value;
   // alert(cityName);
    const API_KEY = "b36760d53197f16e5cf54caf6dc0053f";
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`).then(res => {
            if (!res.ok) {
                console.error('HTTP error :${res.status}');
            }
            return res.json();
        }).then(data => resolve(data))
          .catch(error => resolve (error))
               
            })
    }
    
   