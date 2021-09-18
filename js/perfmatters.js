// // Measuring the Critical Rendering Path with Navigation Timing
// // https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
//
// let startTime;
// window.addEventListener("DOMContentLoaded", function (e) {
//   startTime = performance.now();
// })
//
// window.addEventListener("load", function(event) {
//   let endTime = performance.now();
//
//   let stats = document.getElementById("crp-stats");
// // stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
//   stats.textContent = 'DCL:'+Math.floor(startTime) + 'ms' +' - '+ 'load:' + Math.floor(endTime) + 'ms';
//   startTime = null;
//   endTime = null;
//   stats = null;
//
// });


// window.addEventListener("load", function () {
function extracted() {
    if ('performance' in window) {

        const paintPerf = performance.getEntriesByType('paint');
        let appendHtml = '';
        let value = paintPerf[1];
        if (value.hasOwnProperty("name")){
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
