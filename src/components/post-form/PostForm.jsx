import React, { useState } from "react";
import { Button, Input } from "../index";
import service from "../../appwrite/config";
import { Select } from "../Select";

const backgroundImageUrl =
  "https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=ais";

export const PostForm = () => {
  const [patientName, setPatientName] = useState("");
  const [gender, setGender] = useState("Male");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [tragedyOccur, setTragedyOccur] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dbPost = await service.createRequest({
        date: new Date(),
        gender,
        patientName,
        address,
        contact,
        tragedyOccur,
        age,
      });

      if (dbPost) {
        alert("Request submitted successfully!");
        // Additional actions after submission
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request. Please try again.");
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
          Request for an Ambulance
        </h1>
        <Input
          label="Patient Name"
          placeholder="Enter Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <Input
          type="number"
          label="Patient Age"
          placeholder="Enter Patient Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <Select
          label="Gender"
          options={["Male", "Female"]}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <Input
          label="Tragedy Description"
          placeholder="Describe the tragedy"
          value={tragedyOccur}
          onChange={(e) => setTragedyOccur(e.target.value)}
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

