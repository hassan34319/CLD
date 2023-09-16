"use client"
import { TrainingProgram } from "@/app/types";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Footer from "../(UIComponents)/Footer";

type Props = {
};

function Training({}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobileNumber: "",
    emailAddress: "",
    company : ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    if(!formData) {
        return
    }
    try {
        const result = await client.create({
            _type: 'registrationForm', // Replace with your schema name
            name : formData.name,
            email : formData.emailAddress,
            phone : formData.emailAddress,
            designation : formData.designation,
            company : formData.company,
          });
       console.log("SUBMITTED FORM")
      // Handle success or show a message to the user
    //   console.log("Form data submitted successfully:", response.data);

      // Optionally, you can reset the form data
      setFormData({
        name: "",
        designation: "",
        mobileNumber: "",
        emailAddress: "",
        company : ""
      });
    } catch (error) {
      // Handle error or show an error message to the user
      console.error("Error submitting form data:", error);
    }
  };
  const router = useRouter()

  return (
        <div className="w-[95%] mx-auto text-white">
          <h2
            className=" cursor-pointer text-white underline  text-xxs md:text-sm lg:text-lg mt-2 md:mt-4 lg:mt-8 "
            onClick={()=>router.back()}
          >
            Back
          </h2>
          <h1 className="font-bold text-xs md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-16">
            Register Here
          </h1>
          <h2 className="font-normal text-[#7F7F7F] text-xxs md:text-lg lg:text-xl  mt-2 md:mt-4 lg:mt-8 w-[70%]">
            Please enter all these details correctly as they will be used to
            contact you for your registration.
          </h2>
          <div className="h-6 md:h-12 lg:h-16 w-full mt-4 md:mt-8 lg:mt-12 bg-[#3D3D3D]">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="my-auto h-full w-full outline-none bg-[#3D3D3D] text-xs md:text-lg lg:text-xl pl-[2%]"
            />
          </div>
          <div className="h-6 md:h-12 lg:h-16 w-full mt-4 md:mt-8 lg:mt-12 bg-[#3D3D3D]">
            <input
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="Designation"
              className="my-auto h-full w-full outline-none bg-[#3D3D3D] text-xs md:text-lg lg:text-xl pl-[2%]"
            />
          </div>
          <div className="h-6 md:h-12 lg:h-16 w-full mt-4 md:mt-8 lg:mt-12 bg-[#3D3D3D]">
            <input
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="my-auto h-full w-full outline-none bg-[#3D3D3D] text-xs md:text-lg lg:text-xl pl-[2%]"
            />
          </div>
          <div className="h-6 md:h-12 lg:h-16 w-full mt-4 md:mt-8 lg:mt-12 bg-[#3D3D3D]">
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="my-auto h-full w-full outline-none bg-[#3D3D3D] text-xs md:text-lg lg:text-xl pl-[2%]"
            />
          </div>
          <div className="h-6 md:h-12 lg:h-16 w-full mt-4 md:mt-8 lg:mt-12 bg-[#3D3D3D]">
            <input
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Email address"
              className="my-auto h-full w-full outline-none bg-[#3D3D3D] text-xs md:text-lg lg:text-xl pl-[2%]"
            />
          </div>
          
          {/* Submit button */}
          <div
            onClick={handleFormSubmit}
            className={`cursor-pointer mb-4 md:mb-8 lg:mb-16 mx-auto w-[50%] md:w-[40%] h-8 md:h-14 lg:h-18 mt-4 md:mt-8 lg:mt-12 bg-coral flex items-center justify-center ${cy.className} text-xs md:text-xl lg:text-2xl text-white`}
          >
            REGISTER NOW
          </div>
          <Footer/>
        </div>
  );
}

export default Training;
