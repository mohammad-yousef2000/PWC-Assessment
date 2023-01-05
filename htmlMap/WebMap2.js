
let map;
let autocomplete;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center:  { lat: -34.397, lng: 150.644 },
  });
  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("Search"),
    {
      types: ["(cities)"],
    }
  );

}
const submitButton1=document.getElementById('Submit');
  
   submitButton1.addEventListener("click", () =>
     onPlaceChanged()
   );


// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  const place = autocomplete.getPlace();
    map.panTo(place.geometry.location);
    map.setZoom(9);

}

window.initMap = initMap;
