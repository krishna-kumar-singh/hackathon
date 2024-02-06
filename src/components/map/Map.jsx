import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library
import { getCurrentLocation } from '../getLocation';

export function Map() {
    const mapRef = useRef(null);
    let location;
    useEffect(() => {
        const fetchData = async () => {
          try {
            location = await getCurrentLocation()
          } catch (error) {
            console.log("error in catch:", error);
          }
        };
        fetchData();
      }, [param]);
    let latitude = location.location.latitude
    let longitude =location.longitude

    let latitude2 = 28.5376;
    let longitude2 = 77.2283;

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([latitude, longitude], 13); // Set initial coordinates and zoom level

            // Add a tile layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);

            // Create markers
            var user = L.marker([latitude, longitude]).addTo(mapRef.current);
            var ambulance = L.marker([latitude2, longitude2]).addTo(mapRef.current);

            // Bind popups
            user.bindPopup('Your location').openPopup();
            ambulance.bindPopup('Ambulance').openPopup();
        }
    }, []); // Empty dependency array to run effect only once

    return (
        <div id="map" style={{ height: '400px' }}>Map</div>
    );
}

export default Map;
