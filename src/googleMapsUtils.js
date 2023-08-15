// googleMapsUtils.js
function initMap() {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  
    // You can add additional map configurations or markers here
  }
  
  export function loadGoogleMapsScript(apiKey) {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  
  export default initMap;
  