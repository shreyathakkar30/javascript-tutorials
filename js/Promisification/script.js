//Promisification
function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if(err){
                    reject(err);
                } else{
                    resolve(result);
                }
            });
        });
    };
}

//Without Promise
//Old School JavaScript
function loadScript(src, callback){
    const script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script);

    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.appendChild(script);

}

const loadScriptNew = promisify(loadScript);
console.log(loadScriptNew);
loadScriptNew('test.js').then(() => console.log('Done!')).catch((err) => console.log(err));

(async () => {
    const result = await loadScriptNew('test.js');
    console.log(result);
    console.log('Done!');
})();
// loadScript('test.js', (err, callback) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Script loaded successfully");
//     }
// });