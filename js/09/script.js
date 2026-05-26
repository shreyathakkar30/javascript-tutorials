const button= document.getElementById('clickButton');
const uname = document.getElementById('input-username');
const name = document.getElementById('username');



button.addEventListener('click', () => {
    const value = uname.value;
    console.log(value);
    //Add Value in localstorage 
    localStorage.setItem("name", value);
    location.reload();  
})


window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    name.innerText = value
})