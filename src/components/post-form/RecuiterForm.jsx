import React, { useState } from "react";
import { Button, Input } from "../index";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";
import { Select } from "../Select";

export function RecuiterForm() {
  const [salary, setSalary] = useState();
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [modeOfJob,setModeOfJob]=useState("Offline")
  const [timeOfJob,setTimeOfJob]=useState("Full-Time");
  const [about, setAbout] = useState("");
  const [jobType, setJobType] = useState(null);
  const userData = useSelector((state) => state.auth.userData);
  
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log("userData :",userData)
        const dbPost = await service.createRequest({
            slug: String(salary)+(userData ? userData.$id : null),
            modeOfJob,
            timeOfJob,
            jobType,
            contact,
            address,
            salary,
            about,
            date:new Date().toLocaleDateString(),
            userId: userData ? userData.$id : null,
        });

        if (dbPost) {
          console.log("successfully request get send for recuitment")
          console.log("db post :",dbPost)
          alert("successfully requested")
          // navigate(`/post/${dbPost.$id}`);
        }
      }catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form onSubmit={submit} className="flex flex-col justify-start pb-20 mt-0 ml-0 mr-0 div1 bg-cover bg-center relative" style={{backgroundImage:'url(https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=ais)'}}>
      <div className="w-[1000px] px-2 my-10 pl-10">
      <h1 className="text-center mb-4 text-4xl font-bold font-serif">Recuitment Form</h1>
        <div className="flex flex-col justify-start ml-1 items-center">
            <Input
            type="number"
            label="Salary in INR:"
            placeholder="Salary"
            className="mb-4"
            required
            onChange={(e) => setSalary(e.target.value)}
            />
          <Select
           options={["Offline", "Online"]}
           label="Mode of job"
           className="mb-4 border-gray-300"
           onChange={(e) => setModeOfJob(e.target.value)} 
          />
          <Select
           options={["Full-Time", "Part-Time"]}
           label="Prefered time"
           className="mb-4 border-gray-300"
           onChange={(e) => setTimeOfJob(e.target.value)} 
          />
        </div>
        <br />
        <Input
          type="text"
          label="contact :"
          placeholder="contact"
          className="mb-4"
          required
          onChange={(e) => setContact(e.target.value)}
        />
        <Input
          type="text"
          label="address :"
          placeholder="address"
          className="mb-4"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="text"
          label="Description about the Job:"
          placeholder="Description"
          className="mb-4"
          required
          onChange={(e) => setAbout(e.target.value)}
        />
        <Input
          type="text"
          label="Job Type :"
          placeholder="Job Type"
          className="mb-4"
          required
          onChange={(e) => setJobType(e.target.value)}
        />
      </div>
      <div className="w-[1040px] px-2 pl-10">
        <Button
          type="submit"
          bgColor="bg-green-500"
          className="w-full bg-blue-500  transition-all duration-300 ease-out hover:bg-blue-700 hover:text-white hover:border-primary hover:p-2 hover:rounded-md hover:border-2"
          children="Submit"
        />
      </div>
    </form>
  );
}

export default RecuiterForm