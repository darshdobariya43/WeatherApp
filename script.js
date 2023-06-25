const apikey="67b6c9b8a1a9cbcb97a8e25b7b69b8b5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const watherIcon=document.querySelector(".wather-icon");

async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data =await response.json()

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed  + " km/h";

    if(data.weather[0].main=="Clouds"){
        watherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        watherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        watherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzel"){
        watherIcon.src="images/drizzel.png";
    }
    else if(data.weather[0].main=="Mist"){
        watherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        watherIcon.src="images/snow.png";
    }
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})