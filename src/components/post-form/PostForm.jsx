import React, { useState } from "react";
import { Button, Input } from "../index";
import service from "../../appwrite/config";
import { Select } from "../Select";

export function PostForm() {
  const [patientName, setPatientName] = useState(null);
  const [gender, setGender] = useState("Male");
  const [contact, setContact] = useState(null);
  const [age, setAge] = useState(null);
  const [address, setAddress] = useState(null);
  const [tragedyOccur, setTragedyOccur] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const dbPost = await service.createRequest({
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        gender,
        patientName,
        address,
        contact,
        tragedyOccur,
        age
      });

      if (dbPost) {
        console.log("successfully request get sent for collection");
        console.log("db post :", dbPost);
        alert("Successfully requested");
        // navigate(`/post/${dbPost.$id}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-col justify-start pb-20 mt-0 ml-0 mr-0 div1 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=ais)' }}
    >
      <div className="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 px-2 my-10 pl-10 justify-start">
        <h1 className="text-center mb-4 text-4xl font-bold font-serif">Request For an ambulance</h1>
        <div className="mb-4">
          <Input
            type="text"
            label="Patient Name :"
            placeholder="Patient Name"
            required
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="number"
            label="Patient Age :"
            placeholder="Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Select
            options={["Male", "Female"]}
            label="Gender"
            className="border-gray-300"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            label="Tell us the tragedy: :"
            placeholder="the tragedy that has occured"
            required
            onChange={(e) => setTragedyOccur(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            label="Contact :"
            placeholder="Contact"
            required
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            label="Address :"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          bgColor="bg-green-500"
          className="w-full bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-primary hover:rounded-md sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          children="Submit"
        />
      </div>
    </form>
  );
}

export default PostForm;
