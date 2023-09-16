"use client";
import { TrainingProgram } from "@/app/types";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  subTrainings: TrainingProgram[];
  slug: string;
};

function Training({ subTrainings, slug }: Props) {
  const [selectedBox, setSelectedBox] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobileNumber: "",
    emailAddress: "",
    company: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    if (!formData) {
      return;
    }
    try {
      const result = await client.create({
        _type: "registrationForm", // Replace with your schema name
        name: formData.name,
        email: formData.emailAddress,
        phone: formData.emailAddress,
        designation: formData.designation,
        company: formData.company,
        selectedTraining: slug,
        selectedSubTraining: selectedBox,
      });
      console.log("SUBMITTED FORM");
      // Handle success or show a message to the user
      //   console.log("Form data submitted successfully:", response.data);

      // Optionally, you can reset the form data
      setFormData({
        name: "",
        designation: "",
        mobileNumber: "",
        emailAddress: "",
        company: "",
      });
    } catch (error) {
      // Handle error or show an error message to the user
      console.error("Error submitting form data:", error);
    }
  };

  if (selectedBox) {
    return (
      <div className="w-[95%] mx-auto text-white">
        <h2
          onClick={() => setSelectedBox("")}
          className="text-white underline  text-xxs md:text-sm lg:text-lg mt-2 md:mt-4 lg:mt-8 "
        >
          Back
        </h2>
        <h1 className="font-bold text-xs md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-16">
          Register Here
        </h1>
        <h2 className="font-normal text-[#7F7F7F] text-xxs md:text-lg lg:text-xl  mt-2 md:mt-4 lg:mt-8 w-[70%]">
          Please enter all these details correctly as they will be used to
          contact you for your registration in {selectedBox.toLowerCase()}.
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
          className={`cursor-pointer mx-auto w-[50%] md:w-[40%] h-8 md:h-14 lg:h-18 mt-4 md:mt-8 lg:mt-12 bg-coral flex items-center justify-center ${cy.className} text-xs md:text-xl lg:text-2xl text-white`}
        >
          SUBMIT
        </div>
      </div>
    );
  }

  return (
    <div className={`${subTrainings[0].blueBoxes.length >1 ? "justify-between" : "justify-center" } cursor-pointer w-[95%] flex-wrap flex  mx-auto mt-4 md:mt-8 lg:mt-16 gap-y-4 md:gap-y-8 lg:gap-y-16`}>
      {subTrainings[0].blueBoxes.map((sol, index) => {
        return (
          <div
            onClick={() => setSelectedBox(sol.name)}
            className="w-[48%]"
            key={index}
          >
            <div
              className={`bg-tiffany h-6 md:h-12 lg:h-20 w-[100%] ${cy.className} text-[0.45rem] md:text-sm lg:text-xl text-white font-medium flex items-center justify-center`}
            >
              {sol.name}
            </div>
            <div className="bg-[#f5f5f5] h-[7rem] md:h-[14rem] lg:h-[22rem] w-[100%] text-xxss md:text-xs lg:text-lg text-black font-medium flex flex-col items-center justify-center text-start px-[3.33%] py-[1%] md:px-[6%] md:py-[2%] lg:px-[6%] lg:py-[4%]">
              {sol.description}
              <button
                onClick={() => setSelectedBox(sol.name)}
                className="text-white bg-tiffany hover:opacity-80 text-xxss  focus:ring-4 mt-2 md:mt-4 lg:mt-8 focus:outline-none focus:opacity-70 font-medium rounded-lg md:text-sm px-2 py-1 md:px-5 md:py-2.5 text-center inline-flex items-center dark:bg-tiffany dark:hover:opacity-80 dark:focus:opacity-80"
              >
                Register Now
                <svg
                  className="md:w-3.5 md:h-3.5 w-2 h-2 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Training;
