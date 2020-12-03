// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

 $.getJSON('/data', function(user) {
  var serverUserdata = user.userData;
  var activities = serverUserdata.activity;
  var minutes = serverUserdata.minutes;
  renderpie(activities, minutes);
  
});
function renderpie(activities, minutes){
    // Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: activities,
    datasets: [{
      data: minutes,
           backgroundColor: ['#4e73df', '#3be33e', '#1cc88a', '#36b9cc', '#062B3D', '#1C6689', '#A4A5A1', '#550B08', '#4f5661', '#0e71ab', '#edffed', '#3e4f4e', '#ab4955', '#332d59'],
      hoverBackgroundColor: ['#2e59d9', '#3be33e','#17a673', '#2c9faf', '#062B3D', '#1C6689','#A4A5A1', '#550B08', '#4f5661', '#0e71ab', '#edffed', '#3e4f4e', '#ab4955', '#332d59'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});


  }
