
setInterval(function () {
    var currentTime = moment().format("MMM Do, YYYY [at] hh:m:ss a");
    $("#current-time").text(currentTime);
}, 1000);