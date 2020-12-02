
$.getJSON('/data', function(user) {
  var objSentFromSrv = user;
  console.log("obj from serveer");
  console.log(objSentFromSrv);
  console.log(objSentFromSrv.userData);
  const entries = objSentFromSrv.userData;
  console.log(entries);
  var array = [];

  var i;
  for (i=0; i<entries.date.length; i++){
    var userdataobject = {date:"", activity:"", minutes:0, weight:0, caloriesIn: 0, caloriesOut: 0};
    array.push(userdataobject);
    array[i].date = entries.date[i];
    array[i].activity = entries.activity[i];
    array[i].minutes = entries.minutes[i];
    array[i].weight = entries.weight[i];
    array[i].caloriesIn = entries.caloriesIn[i];
    array[i].caloriesOut = entries.caloriesOut[i];
  };

  get(array);
});

function get(data){
  

  console.log(data); 
  var container = document.getElementById('table');
  var hot = new Handsontable(container, {
    data: data,
    rowHeaders: false,
    colHeaders: true,
    filters: true,
    dropdownMenu: false,
    colHeaders: ['Date', 'Activity', 'Minutes', 'Weight', 'Calorie In', 'Calorie Out', 'Id'],
    licenseKey: 'non-commercial-and-evaluation'

  });
  
    
  };
