// // Measuring the Critical Rendering Path with Navigation Timing
// // https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
//

// window.addEventListener("load", function () {
function extracted() {
    if ('performance' in window) {

        const paintPerf = performance.getEntriesByType('paint');
        let appendHtml = '';
        let value = paintPerf.length > 0 && paintPerf[1];
        if (value.name !== undefined) {
            let info = value.name + ': ' + Math.ceil(value.startTime) + 'ms '
            appendHtml += info;
            // console.log(info)
            document.getElementById("crp-stats")
                .innerHTML = appendHtml;

        }
    }
}

extracted();
// })
