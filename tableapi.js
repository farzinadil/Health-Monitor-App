function get(){

  let geturl = 'https://api.sheety.co/698e6b1b78ff165acfb5237f82ebb6ec/log/sheet1';
  fetch(geturl)
  .then((response) => response.json())
  .then(json => {
    // Do something with the data
    //console.log(json.sheet1);
    //console.log(json.sheet1[0].date);
    //console.log(json.sheet1.length)
    var data = json.sheet1;
    console.log("Table DATA:");
    console.log(data);
    var container = document.getElementById('table');
    var hot = new Handsontable(container, {
      data: data,
      rowHeaders: false,
      colHeaders: true,
      filters: true,
      dropdownMenu: false,
      colHeaders: ['Date', 'Day', 'Activity', 'Weight', 'Time', 'Calorie In', 'Calorie Out', 'Id'],
      licenseKey: 'non-commercial-and-evaluation'
  
    });
  

  });

}
window.onload = function () {
    get();
}