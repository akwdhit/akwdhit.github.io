/*
// aImport the pre-requisites
var KMTPkgLoadedLibraries = {}

$(document).ready(function () {
    // AKW - List the script name here
    scripts = ['script/kmt/internal/const.js', 'script/kmt/internal/internal.js']

    // AKW - Load each script
    $.each(scripts, function(idx, scriptName) {
        $.getScript(scriptName, function() {
            // AKW - Record the load status for each script
            KMTPkgLoadedLibraries[scriptName] = true
        })
    })
})
*/

// getSuggestedTopup : The main function of this module
function getSuggestedTopup(expectedValue, arr) {
    var results = new Object();

    var lowestValue = Math.min.apply(Math, arr);
    var lowestValueAfterFiltered = 70/100 * lowestValue;
    var lowestChange = GetNearestRound(10000, expectedValue - lowestValueAfterFiltered); // aThis value will later be used as what we will pay
    var lowestNewTotal = lowestValue + lowestChange

    $.each(arr, function(index, value) {
        thisItemResult = GetNearestRound(10000, lowestNewTotal - value);
        if (thisItemResult <= 0) {
            thisItemResult = 0
        }

        results[value] = thisItemResult
    })

    return results;
}