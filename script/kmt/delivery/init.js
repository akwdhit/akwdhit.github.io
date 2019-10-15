// aInit the module
var KMTDeliveryLoadedLibraries = {}

$(document).ready(function () {
    // AKW - List the script name here
    scripts = ["script/kmt/pkg/kmt.js"]

    // AKW - Load each script
    $.each(scripts, function(idx, scriptName) {
        $.getScript(scriptName).done(function(script, testStatus) {
            // AKW - Record the load status for each script
            KMTDeliveryLoadedLibraries[scriptName] = true
            console.log(scriptName + " has been loaded successfully")
        })
    })
})