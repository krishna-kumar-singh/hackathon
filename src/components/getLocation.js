// try to get longitude and latitude of user
export function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                resolve({ latitude, longitude });
            },
            function(error) {
                reject(error);
            }
        );
    });
}

export function calculateDistance(latitude1, latitude2,longitude1, longitude2) {
    
    return Math.sqrt(((latitude1-latitude2)*(latitude1-latitude2))+((longitude1-longitude2)*(longitude1-longitude2)))
}
