
setInterval(function () {
    var currentTime = moment().format("MMM Do, YYYY [at] hh:m:ss a");
    $("#current-time").text(currentTime);
}, 1000);

$('#myModal').on('shown.bs.modal', function () {
    $('#add-project').trigger('focus')
})

$(function () {
    $("#datepicker").datepicker({ minDate: 0,});
});