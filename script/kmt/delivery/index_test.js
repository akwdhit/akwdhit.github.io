/*
$("<script src=\"script/kmt/internal/const.js\"></script>").insertBefore($("#mainScript"))
$("<script src=\"script/kmt/internal/internal.js\"></script>").insertBefore($("#mainScript"))
$("<script src=\"script/kmt/pkg/kmt.js\"></script>").insertBefore($("#mainScript"))
// Create
var bodyEl = document.getElementsByTagName('HEAD').item(0);
var scriptEl = document.createElement('script');
scriptEl.type = 'text/javascript';
scriptEl.src = 'script/kmt/pkg/kmt.js';
if (bodyEl != null) {
    bodyEl.appendChild(scriptEl);
    //bodyEl.insertBefore(scriptEl, bodyEl.childNodes[0])
} else {
    alert("body is null")
}
*/
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
var myPrettyCode = function() {
    // AKW - Defining the test cases
    expectedValue = 190000
    testCase1 = JSON.stringify([45000, 59000, 69999, 100000, 200000, 210000, 98000]);
    result1 = {45000:160000, 59000:150000, 69999:140000, 100000:110000, 200000:10000, 210000:0, 98000:110000};
    testCase2 = JSON.stringify([91000, 38000])
    result2 = {91000:110000, 38000:160000}
    testCase3 = JSON.stringify([100000, 148200])
    result3 = {100000:120000, 148200:70000}
    var testCases = {}
    testCases[testCase1] = result1
    testCases[testCase2] = result2
    testCases[testCase3] = result3
        
    // AKW - Execute all test cases
    var results = {}
    var AllPassed = true
    var idx = 0
    $.each(testCases, function(testCaseJSON, expected) {
        testCase = JSON.parse(testCaseJSON)
    
        result = getSuggestedTopup(expectedValue, testCase)
        passed = (JSON.stringify(result) == JSON.stringify(expected))
    
        print("TestCase" + idx++ + " started")
        print("Result: " + JSON.stringify(result))
        print("Expected: " + JSON.stringify(expected))
        print("PASSED? " + passed)
    
        results[testCaseJSON] = ((passed)? "[PASS]" : "[FAIL]") + "Expected: " + JSON.stringify(expected, null, " ") + ", got: " + JSON.stringify(result, null, " ")
    
        if (!passed) {
            AllPassed = false
        }
    })
    
    // AKW - Print the output
    msg = ""
    if (AllPassed) {
        msg = "All test cases are passed: " + JSON.stringify(results, null, '\t');
    } else {
        msg = "Failed, results are: " + JSON.stringify(results, null, '\t');
    }
    print(msg)
 };
loadScript([baseURL + 'script/kmt/internal/const.js', baseURL + 'script/kmt/internal/internal.js', baseURL + 'script/kmt/pkg/kmt.js'], myPrettyCode);

function print(msg) {
    console.log(msg)
    $("body").append("<p>" + msg + "</p>")
}