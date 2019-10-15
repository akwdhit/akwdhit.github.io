//https://stackoverflow.com/questions/21294/dynamically-load-a-javascript-file/21297#21297
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
loadScript(['script/kmt/internal/const.js', 'script/kmt/internal/internal.js', 'script/kmt/pkg/kmt.js'], calculate);

function calculate() {
    var result

    var expectedValue = 190000

    value = [45000, 59000, 69999, 100000, 200000, 210000, 98000]    // 70%: 45000->160000, 59000->150000, 69999->140000, 
                                                                    // 100000->110000, 200000->10000, 210000->0, 98000->110000
    //value = [91000, 38000]                                        // 70%: 110000, 160000
    //value = [100000, 148200]                                      // 70%: 120000, 70000

    // aGet lowest value
    result = Math.min.apply(Math, value)

    alert(result)

    alert(JSON.stringify(getSuggestedTopup(expectedValue, value)))
}