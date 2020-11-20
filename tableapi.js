




window.onload(get());

function get(){

  let geturl = 'https://api.sheety.co/698e6b1b78ff165acfb5237f82ebb6ec/log/sheet1';
  fetch(geturl)
  .then((response) => response.json())
  .then(json => {
    // Do something with the data
    console.log(json.sheet1);
    console.log(json.sheet1[0].date);
    console.log(json.sheet1.length)
    var i;
    for (i=0; i<json.sheet1.length; i++){
      console.log(json.sheet1[i].date);
    }
  });

}
