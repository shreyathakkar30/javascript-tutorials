const btn  = document.getElementById('Stop');


function showtime(){
    const currentTime = new  Date();
    //console.log(currentTime);
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    //console.log(time);

 document.getElementById("time").innerText = time;
}


//etTimeout(() => console.log('HI'), 5000);//Ak hi bar kam krta hai
//setInterval(() => console.log('HI'), 5000 )//Task repeat krta hai
let interval = setInterval(showtime, 1000);
btn.addEventListener('click', () => {
    clearInterval(interval);

})
