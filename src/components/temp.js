// try to get longitude and latitude of user
function geoLocation(){
    return navigator.geolocation.getCurrentPosition(
        function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            return {latitude,longitude}
    })
}

function calculateDistance(latitude1, latitude2,longitude1, longitude2) {
    
    return Math.sqrt(((latitude1-latitude2)*(latitude1-latitude2))+((longitude1-longitude2)*(longitude1-longitude2)))
}
