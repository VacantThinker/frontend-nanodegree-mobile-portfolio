// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

// var startTime;
// window.addEventListener("DOMContentLoaded", function (e) {
//   startTime = performance.now();
// })

// window.addEventListener("load", function(event) {
  var stats = document.getElementById("crp-stats");
// stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
  stats.textContent = 'DCL:'+Math.floor(window.startTime) + 'ms' +' - '+ 'load:' + Math.floor(window.endTime) + 'ms';
  window.startTime = null;
  window.endTime = null;
  stats = null;
// });
