const apikey="9e8fe85476d3478122ac9e2b3cbfcd29";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


let cityname="";
document.addEventListener("DOMContentLoaded",getInputValue("hyderabad"));
function getInputValue(param){  
    const ivalue=document.querySelector("input");
    if(param){
        cityname=param;
    } else {
        cityname=ivalue.value;
    }
    
    checkweather()
}
const h1=document.querySelector(".temp");
const city=document.querySelector(".city");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const icon=document.querySelector(".weather-icon");
async function checkweather() {
    let response = await fetch(apiurl+`&q=${cityname}`+ `&appid=${apikey}`);
        console.log(response);
    let data= await response.json();
    console.log(data);
    console.log(data.weather[0].main)
    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    } else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png";
    } else if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze"){
        icon.src="images/drizzle.png";
    } else if(data.weather[0].main=="Snow"){
        icon.src="images/snow.png";
    }else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png";
    }
   const obj= data.main;
   const w=data.wind;
   wind.innerText=w.speed+" km/h";
//    console.log(obj);
//   console.log(obj.temp);
//   console.log(cityname);
city.innerText=data.name;
  h1.innerText=Math.round(obj.temp)+"°c";
  humidity.innerText=obj.humidity+"%";
  document.querySelector(".weather").style.display="block";
}
