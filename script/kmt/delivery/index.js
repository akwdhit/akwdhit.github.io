//https://stackoverflow.com/questions/21294/dynamically-load-a-javascript-file/21297#21297
var baseURL = 'https://akwdhit.github.io/'
function loadScript(urls, callback)
{
    for (i = 0; i < urls.length; i++) {
        // Adding the script tag to the head as suggested before
        var url = urls[i]
        var head = document.head;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i == urls.length -1) {
            script.onreadystatechange = callback;
            script.onload = callback;
        }

        // Fire the loading
        head.appendChild(script);
    }
}
loadScript([baseURL + 'script/kmt/internal/const.js', baseURL + 'script/kmt/internal/internal.js', baseURL + 'script/kmt/pkg/kmt.js'], calculate);

// aCallback method
function calculate() {
    // aDo nothing at the moment, it is just a callback
}