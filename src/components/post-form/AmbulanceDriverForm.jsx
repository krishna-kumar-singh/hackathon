import React, { useState } from "react";
import { Button, Input } from "../index";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";
import { getCurrentLocation } from "../../utils/getLocation";

const backgroundImageUrl =
  "https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=ais";

const AmbulanceDriverForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [ambulanceNo, setAmbulanceNo] = useState("");

  const userData = useSelector((state) => state.auth.userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const location = await getCurrentLocation();
      const dbPost = await service.ambulanceDriverForm({
        driverLatitude: location.latitude,
        driverLongitude: location.longitude,
        slug: name,
        name,
        contact,
        address,
        ambulanceNo,
        date: new Date(),
        userId: userData ? userData.$id : null,
      });

      if (dbPost) {
        alert("Successfully registered your ambulance!");
        // Additional actions after registration
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to register your ambulance. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        minHeight: "100vh",
        background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        style={{ minWidth: "300px", maxWidth: "500px" }}
      >
        <h1 className="text-3xl mb-4 text-center font-bold">
          Register Your Ambulance for the Service
        </h1>
        <Input
          label="Driver Name"
          placeholder="Enter Driver Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Ambulance No"
          placeholder="Enter Ambulance No"
          value={ambulanceNo}
          onChange={(e) => setAmbulanceNo(e.target.value)}
          required
        />
        <Input
          label="Contact"
          placeholder="Enter Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <Input
          label="Address"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <div className="flex items-center justify-center mt-6">
          <Button
            type="submit"
            bgColor="bg-green-500"
            className="w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AmbulanceDriverForm;
