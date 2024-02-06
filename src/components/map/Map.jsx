import React, { useRef, useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library
import { getCurrentLocation } from '../getLocation';
import { useSelector } from 'react-redux';

export function Map() {
    const mapRef = useRef(null);
    const [location, setLocation] = useState(null);
    const latitude2 = useSelector((state) => state.auth.driverLatitude);
    const longitude2 = useSelector((state) => state.auth.driverLongitude);
    console.log()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const loc = await getCurrentLocation();
                console.log("console loc :",loc)
                setLocation(loc);

            } catch (error) {
                console.log("error in catch:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run once on mount

    useEffect(() => {
        if (location && !mapRef.current) {
            const { latitude, longitude } = location;
            mapRef.current = L.map('map').setView([latitude, longitude], 19); // Set initial coordinates and zoom level

            // Add a tile layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);

            // Create markers
            const user = L.marker([latitude, longitude]).addTo(mapRef.current);
            const ambulance = L.marker([latitude2,longitude2]).addTo(mapRef.current);

            // Bind popups
            user.bindPopup('Your location').openPopup();
            ambulance.bindPopup('Ambulance').openPopup();
        }
    }, [location, latitude2, longitude2]); // Run when location or latitude2 or longitude2 changes

    return (
        <div id="map" style={{ height: '400px' }}>Map</div>
    );
}

export default Map;
