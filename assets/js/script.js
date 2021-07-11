var projectName = document.querySelector("#project-name");
var projectType = document.querySelector("#project-type");
var hourlyRate = document.querySelector(".hourly-rate");
var date = document.querySelector("#date-picker");
var submitButton = document.querySelector("#submit-button");
var projectTable = document.querySelector("#project-table tbody");
var projectForm = document.querySelector("#project-form")
var projectList = [];

// Date on Top Bar
setInterval(function () {
    var currentTime = moment().format("MMM Do, YYYY [at] hh:mm:ss a");
    $("#current-time").text(currentTime);
}, 1000);

// Makes modal appear when add project button is clicked
$('#myModal').on('shown.bs.modal', function () {
    $('#add-project').trigger('focus')
})

// Lets user pick date
$(function () {
    $("#date-picker").datepicker({ minDate: 0,});
});

// Loads table data when page loads
loadProjects();

// Loads Projects onto table
function loadProjects() {
    if (localStorage.getItem("projects") != null) {
        projectList = JSON.parse(localStorage.getItem("projects"));
    }
    projectTable.innerHTML = "";
    for(i = 0; i < projectList.length; i++) {
        var project = projectList[i];
        var tableRow = document.createElement("tr");
        var projectName = document.createElement("td");
        var projectType = document.createElement("td");
        var hourlyRate = document.createElement("td");
        var dueDate = document.createElement("td");
        var daysUntil = document.createElement("td");
        var totalEarnings = document.createElement("td");
        var deleteButton = document.createElement("td");

        
        projectTable.appendChild(tableRow);
        tableRow.appendChild(projectName);
        tableRow.appendChild(projectType);
        tableRow.appendChild(hourlyRate);
        tableRow.appendChild(dueDate);
        tableRow.appendChild(daysUntil);
        tableRow.appendChild(totalEarnings);
        tableRow.appendChild(deleteButton);

        projectName.textContent = project.name;
        projectType.textContent = project.type;
        hourlyRate.textContent = project.rate.toFixed(2);
        dueDate.textContent = project.date;
        daysUntil.textContent = project.daysRemaining + " days";
        totalEarnings.textContent = project.totalEarnings.toFixed(2);
    }
}

// Stores and adds project to table when submit is clicked
projectForm.addEventListener('submit', function() {
    var projectData = {
        name: projectName.value,
        type: projectType.value,
        rate: parseFloat(hourlyRate.value),
        date: date.value,
        daysRemaining: moment(date.value).diff(moment(), "days"),
    }
    projectData.totalEarnings = projectData.rate * 8 * projectData.daysRemaining;

    if (localStorage.getItem("projects") != null) {
        projectList = JSON.parse(localStorage.getItem("projects"));
    }
    projectList.push(projectData);
    localStorage.setItem("projects", JSON.stringify(projectList));

    $('#project-modal').modal('hide');

    loadProjects();
});