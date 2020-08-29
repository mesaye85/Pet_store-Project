var map = L.map('map').setView([30.2955, -81.4083], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([30.2955, -81.4083]).addTo(map)
    .bindPopup('The Pet Salon.<br> Jacksonville, FL')
    .openPopup();
   
