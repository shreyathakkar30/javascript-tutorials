const button = document.getElementById('SearchButton');
const input = document.getElementById('city-input');

const cityName = document.getElementById('cityname');
const cityTime = document.getElementById('citytime');
const cityTemp = document.getElementById('citytemp');


async function getdata(cityName){
 const promise = await fetch
    (`http://api.weatherapi.com/v1/current.json?key=bc388e3478594fa1b1684650262605%20&q=${cityName}&aqi=yes`)
    return await promise.json();


}

button.addEventListener('click', async () => {
   const value = input.value;
   getdata(value);
   const result = await getdata(value);
   cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
   cityTime.innerText = result.location.localtime;
   cityTemp.innerText = result.current.temp_c;
   
});



