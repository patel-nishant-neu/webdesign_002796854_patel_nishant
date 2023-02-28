$(document).ready(function() {
    // Set initial state
    let stopwatch = $('#stopwatch');
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let running = false;
    let intervalId;
  
    // Start button click event
    $('#start').click(function() {
      if (!running) {
        running = true;
        intervalId = setInterval(async function() {
          seconds++;
          if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
              minutes = 0;
              hours++;
            }
          }
          let formattedTime = (hours < 10 ? '0' + hours : hours) + ':' +
                               (minutes < 10 ? '0' + minutes : minutes) + ':' +
                               (seconds < 10 ? '0' + seconds : seconds);
          stopwatch.text(formattedTime);
        }, 1000);
      }
    });
  
    // Stop button click event
    $('#stop').click(function() {
      if (running) {
        running = false;
        clearInterval(intervalId);
      }
    });
  
    // Reset button click event
    $('#reset').click(function() {
      running = false;
      clearInterval(intervalId);
      seconds = 0;
      minutes = 0;
      hours = 0;
      stopwatch.text('00:00:00');
    });
  });
