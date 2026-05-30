//Promisification

//Without Promise
//Old School JavaScript
function loadScript(src, callback){
    const script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script);

    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.appendChild(script);

}

loadScript('test.js', (err, callback) => {
    if(err){
        console.log(err);
    } else{
        console.log("Script loaded successfully");
    }
});