let data;

let inputBox=document.getElementById("inputBox");
let countryName=document.getElementById("countryName");
let startName=document.getElementById("startName");
let cityName=document.getElementById("cityName");
let humidity=document.getElementById("humidity");
let windSpeed=document.getElementById("windSpeed");
let temprature=document.getElementById("temprature");
let weatherStatus=document.getElementById("weatherStatus");
let logoImage=document.getElementById("logoImage");


const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value){
        alert("Fill the city name plzz");
        return;
    }


const city = inputBox.value;

const fetchData=await fetch(
    `http://api.weatherapi.com/v1/current.json?key=81e90e65fd1e4c6c91221725232903&q=${city}`
);

const orgData = await fetchData.json();
data=orgData;

countryName.innerHTML = data.location.country;
stateName.innerHTML=data.location.region;
cityName.innerHTML=data.location.name;
humidity.innerHTML = data.current.humidity;
windSpeed.innerHTML = data.current.wind_kph;
temprature.innerHTML = data.current.temp_c;
logoImage.src = data.current.condition.icon;
weatherStatus.innerHTML = data.current.condition.text;

};