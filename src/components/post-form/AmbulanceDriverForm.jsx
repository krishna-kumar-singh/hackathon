import React, { useState } from "react";
import { Button, Input } from "../index";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";

//creating a form full ambulance driver to serve


export function AmbulanceDriverForm() {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [ambulanceNo, setAmbulanceNo] = useState();

  const userData = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log("userData :",userData)
        const dbPost = await service.ambulanceDriverForm({
          
          slug:name,
          name,
          contact,
          address,
          ambulanceNo,
          date:new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          userId: userData ? userData.$id : null,
        });

        if (dbPost) {
          console.log("successfully request get send for collection")
          console.log("db post :",dbPost)
          alert("successfully requested")
        }
      }catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={submit} className=" flex flex-col justify-start pb-20 mt-0 ml-0 mr-0 div1 bg-cover bg-center relative" style={{backgroundImage:'url(https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=ais)'}}>
      <div className="w-[1000px] px-2 my-10 pl-10 ">
      <h1 className="text-center mb-4 text-4xl font-bold font-serif">Request For an ambulance</h1>
        <div className="flex flex-col justify-start ml-1">
        <Input
          type="text"
          label="Driver Name :"
          placeholder="Name"
          className="mb-4"
          required
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <Input
          type="text"
          label="Ambulance No :"
          placeholder="Ambulance No"
          className="mb-4"
          required
          onChange={(e) => setAmbulanceNo(e.target.value)}
        />
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

        <Button
        type="submit"
        bgColor="bg-green-500"
        className="w-30 bg-blue-500  transition-all duration-300 ease-out hover:bg-blue-700 hover:text-white hover:border-primary hover:p-2 hover:rounded-md hover:border-2"
        children="Submit"
        />
      </div>
    </form>
  );
}

export default AmbulanceDriverForm