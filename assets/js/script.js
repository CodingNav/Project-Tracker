var projectName = document.querySelector("#project-name");
var projectType = document.querySelector("#project-type");
var hourlyRate = document.querySelector(".hourly-rate");
var date = document.querySelector("#date-picker");
var submitButton = document.querySelector("#submit-button");

setInterval(function () {
    var currentTime = moment().format("MMM Do, YYYY [at] hh:mm:ss a");
    $("#current-time").text(currentTime);
}, 1000);

$('#myModal').on('shown.bs.modal', function () {
    $('#add-project').trigger('focus')
})

$(function () {
    $("#datepicker").datepicker({ minDate: 0,});
});


submitButton.addEventListener('click', function() {
    var projectData = {
        name: projectName.value,
        type: projectType.value,
        rate: hourlyRate.value,
        date: date.value
    }

})