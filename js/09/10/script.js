const button = document.getElementById('get-location-button');

async function getdata(lat, long){
 const promise = await fetch
    (`http://api.weatherapi.com/v1/current.json?key=bc388e3478594fa1b1684650262605%20&q=${lat},${long}&aqi=yes`)
    return await promise.json();
}

async function gotlocation(position){
   const result =  await getdata(position.coords.longitude, position.coords.longitude)
    //console.log(position);
    console.log(result);

}

function failedlocation(){
    console.log('Failed to get or Fetch Location')
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotlocation, failedlocation);

});