let geoloc;

const longitude = document.querySelector('.longitude');
const latitude = document.querySelector('.latitude');
const coords = document.querySelector('.coords');
//checks if geolocation is avaliable
if (navigator.geolocation) {
    //if it is avaliable add the geolocation inside the html
    navigator.geolocation.getCurrentPosition((position) => {
        longitude.innerHTML += position.coords.longitude;
        latitude.innerHTML += position.coords.latitude;
    });
    //if its not avaliable we get the text
} else {
    coords.innerHTML = 'Geolocation is not supported';
}