
    fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=18e9b1ba1eaf4731b0347ede6565a8a9", requestOptions)
    .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
      coordinates(data)
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

      