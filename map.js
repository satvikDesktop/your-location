
    fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=18e9b1ba1eaf4731b0347ede6565a8a9", requestOptions)
    .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
      coordinates(data)
      display(data)
    })
    .catch (err=>console.log(err)) 

    var requestOptions = {
         method: 'GET',
    };
 


function coordinates (data) {
  var map = new ol.Map({
      
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([data.location.longitude,data.location.latitude]),
          zoom: 12
        })
    });
}
function display(data) {
  var ip= document.createElement("h2");
  ip.textContent=`Your I.P. address is : ${data.ip}`

  var country= document.createElement("h2");
  country.textContent=`Country : ${data.country.name} , ${data.country.name_native}`

  var city= document.createElement("h2");
  city.textContent=`City :${ data.city.name}`

  var currency= document.createElement("h2");
  currency.textContent=`Currency : ${data.country.currency}`

  var post= document.createElement("h2");
  post.textContent=`Postal Code : ${data.postcode}`

  var phn= document.createElement("h2");
  phn.textContent=`Phone Code : ${data.country.phone_code}`

  document.getElementById('details').appendChild(ip);
  document.getElementById('details').appendChild(country);
  document.getElementById('details').appendChild(city);
  document.getElementById('details').appendChild(post);
  document.getElementById('details').appendChild(currency);
  document.getElementById('details').appendChild(phn);
}

      