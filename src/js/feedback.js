const toggleReport = document.getElementById("toggleReport");
const reportBody = document.querySelector(".report-body");

toggleReport.addEventListener("click", function () {
  reportBody.classList.toggle("show");
});
