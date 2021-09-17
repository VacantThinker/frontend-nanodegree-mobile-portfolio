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


window.addEventListener("load", function () {
    function extracted() {
        if ('performance' in window) {

            const paintPerf =  performance.getEntriesByType('paint');
            console.log(paintPerf)
        }
    }
    extracted();
})
