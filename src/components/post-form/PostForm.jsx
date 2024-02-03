import React, { useState } from "react";
import { Button, Input } from "../index";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";
import { Select } from "../Select";

export function PostForm() {
  const [patientName, setPatientName] = useState(null);
  const [gender, setGender] = useState("Male");
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [tragedyOccur, setTragedyOccur] = useState(null);
  const userData = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log("userData :",userData)
        const dbPost = await service.createRequest({
          slug:(patientName+date),
          gender,
          patientName,
          address,
          contact,
          tragedyOccur,
          age,
          date:new Date().toLocaleDateString(),
          userId: userData ? userData.$id : null,
        });

        if (dbPost) {
          console.log("successfully request get send for collection")
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
      <h1 className="text-center mb-4 text-4xl font-bold font-serif">Enrollment form</h1>
        <div className="flex flex-col justify-start ml-1">
        <Input
          type="text"
          label="Name :"
          placeholder="Name"
          className="mb-4"
          required
          onChange={(e) => setName(e.target.value)}
        />
          <Select
           options={["Male", "Female"]}
           label="Gender"
           className="mb-4 border-gray-300"
           onChange={(e) => setGender(e.target.value)} 
          />
          <Select
           options={["8th-10th", "11th-12th", "college"]}
           label="Qualification"
           className="mb-4 border-gray-300"
           onChange={(e) => setQualification(e.target.value)} 
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
          <div className="flex justify-start">
          <input
            className='inline items-center mr-2 focus:bg-gray-50 duration-200 borderbg-white text-black outline-none border-gray-300  '
            type="checkbox"
            name="experience"
            id="experience"
            defaultValue={experience}
            onChange={() => setExperience((prev) => !prev)}
          />
          <label htmlFor="experience"> Experience</label>
          </div>
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
          label="About :"
          placeholder="About"
          className="mb-4"
          required
          onChange={(e) => setAbout(e.target.value)}
        />
        <Input
          type="text"
          label="Interested Job :"
          placeholder="Interested Job"
          className="mb-4"
          required
          onChange={(e) => setJobType(e.target.value)}
        />
        <Input
          type="url"
          label="Potofolio :"
          placeholder="Potofolio Url"
          className="mb-4"
          onChange={(e) => setPotofolio(e.target.value)}
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

export default PostForm