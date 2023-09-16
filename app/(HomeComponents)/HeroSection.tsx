import Image from "next/image";
import React from "react";
import { bebas } from "../utils/Babas";
import { cy } from "../utils/Cy";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section className="w-full flex flex-col items-center mt-8 md:mt-16">
      <div className="w-full flex flex-row justify-between items-center mb-4 md:mt-8 lg:mb-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[30%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR WORK
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[30%] md:h-1 lg:h-2 "></div>
      </div>
      {/* Top two headings */}
      <div
        className={`mb-2 w-full flex flex-row justify-between items-start  px-6 text-center md:px-16  lg:px-28 text-coral`}
      >
        {/* Heading 1 */}
        <div className="flex flex-row w-[35%] lg:w-[35%] xl:w-[30%]">
          <svg
            className="h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[45px] lg:w-[45px] mr-[2px] md:mr-1 "
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0001 34.2857C27.8898 34.2857 34.2858 27.8898 34.2858 20C34.2858 12.1102 27.8898 5.71429 20.0001 5.71429C12.1103 5.71429 5.71434 12.1102 5.71434 20C5.71434 27.8898 12.1103 34.2857 20.0001 34.2857Z"
              fill="#FF6F61"
            />
            <path
              d="M20 40C16.0444 40 12.1776 38.827 8.8886 36.6294C5.59962 34.4318 3.03617 31.3082 1.52242 27.6537C0.00866566 23.9991 -0.387401 19.9778 0.384303 16.0982C1.15601 12.2186 3.06082 8.65492 5.85787 5.85787C8.65492 3.06082 12.2186 1.15601 16.0982 0.384303C19.9778 -0.387401 23.9991 0.00866566 27.6537 1.52242C31.3082 3.03617 34.4318 5.59962 36.6294 8.8886C38.827 12.1776 40 16.0444 40 20C39.9939 25.3025 37.8849 30.386 34.1355 34.1355C30.386 37.8849 25.3025 39.9939 20 40ZM20 2.85715C16.6095 2.85715 13.2951 3.86256 10.4759 5.74624C7.65682 7.62992 5.45958 10.3073 4.16207 13.4397C2.86457 16.5722 2.52509 20.019 3.18655 23.3444C3.84801 26.6698 5.48071 29.7244 7.87818 32.1218C10.2756 34.5193 13.3302 36.152 16.6556 36.8135C19.981 37.4749 23.4278 37.1354 26.5603 35.8379C29.6927 34.5404 32.3701 32.3432 34.2538 29.5241C36.1374 26.7049 37.1429 23.3905 37.1429 20C37.1376 15.4551 35.3297 11.0978 32.116 7.88402C28.9022 4.67026 24.5449 2.86244 20 2.85715Z"
              fill="#FF6F61"
            />
          </svg>
          <div className=" flex flex-col">
            <h1
              className={`text-start text-xs md:text-2xl lg:text-4xl ${bebas.className} flex flex-row`}
            >
              CORPORATE LEADERSHIP SOLUTIONS
            </h1>
            <p className="text-xxss md:text-xs text-start">
              World class leadership and management development programs for
              C-suite, mid-tier and front-line management.
            </p>
          </div>
        </div>
        {/* Heading 2 */}
        <div className="flex flex-row w-[40%] lg:w-[35%] xl:w-[35%] text-tiffany">
          <svg
            className="h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[45px] lg:w-[45px] mr-[2px] md:mr-1 "
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0001 34.2857C27.8898 34.2857 34.2858 27.8898 34.2858 20C34.2858 12.1102 27.8898 5.71429 20.0001 5.71429C12.1103 5.71429 5.71434 12.1102 5.71434 20C5.71434 27.8898 12.1103 34.2857 20.0001 34.2857Z"
              fill="#0ABAB5"
            />
            <path
              d="M20 40C16.0444 40 12.1776 38.827 8.8886 36.6294C5.59962 34.4318 3.03617 31.3082 1.52242 27.6537C0.00866566 23.9991 -0.387401 19.9778 0.384303 16.0982C1.15601 12.2186 3.06082 8.65492 5.85787 5.85787C8.65492 3.06082 12.2186 1.15601 16.0982 0.384303C19.9778 -0.387401 23.9991 0.00866566 27.6537 1.52242C31.3082 3.03617 34.4318 5.59962 36.6294 8.8886C38.827 12.1776 40 16.0444 40 20C39.9939 25.3025 37.8849 30.386 34.1355 34.1355C30.386 37.8849 25.3025 39.9939 20 40ZM20 2.85715C16.6095 2.85715 13.2951 3.86256 10.4759 5.74624C7.65682 7.62992 5.45958 10.3073 4.16207 13.4397C2.86457 16.5722 2.52509 20.019 3.18655 23.3444C3.84801 26.6698 5.48071 29.7244 7.87818 32.1218C10.2756 34.5193 13.3302 36.152 16.6556 36.8135C19.981 37.4749 23.4278 37.1354 26.5603 35.8379C29.6927 34.5404 32.3701 32.3432 34.2538 29.5241C36.1374 26.7049 37.1429 23.3905 37.1429 20C37.1376 15.4551 35.3297 11.0978 32.116 7.88402C28.9022 4.67026 24.5449 2.86244 20 2.85715Z"
              fill="#0ABAB5"
            />
          </svg>
          <div className=" flex flex-col">
            <h1
              className={`text-start text-xs md:text-2xl lg:text-4xl ${bebas.className} flex flex-row`}
            >
              GOVERNMENT LEARNING SOLUTIONS
            </h1>
            <p className="text-xxss md:text-xs text-start">
              Transforming public sector institutions through customized
              training programs.
            </p>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className="w-[45%] h-28 md:h-48 lg:h-[20rem] relative ">
        <Image
          fill
          className="object-contain"
          src="/HeroImage.png"
          alt="Hero"
        />
      </div>
      {/* Bottom two headings */}
      <div
        className={`mb-2 w-full flex flex-row justify-between items-start  px-6 text-center md:px-16  lg:px-28 text-coral`}
      >
        {/* Heading 1 */}
        <div className="flex flex-row w-[35%] lg:w-[35%] xl:w-[30%] text-tiffany">
          <svg
            className="h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[45px] lg:w-[45px] mr-[2px] md:mr-1 "
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0001 34.2857C27.8898 34.2857 34.2858 27.8898 34.2858 20C34.2858 12.1102 27.8898 5.71429 20.0001 5.71429C12.1103 5.71429 5.71434 12.1102 5.71434 20C5.71434 27.8898 12.1103 34.2857 20.0001 34.2857Z"
              fill="#0ABAB5"
            />
            <path
              d="M20 40C16.0444 40 12.1776 38.827 8.8886 36.6294C5.59962 34.4318 3.03617 31.3082 1.52242 27.6537C0.00866566 23.9991 -0.387401 19.9778 0.384303 16.0982C1.15601 12.2186 3.06082 8.65492 5.85787 5.85787C8.65492 3.06082 12.2186 1.15601 16.0982 0.384303C19.9778 -0.387401 23.9991 0.00866566 27.6537 1.52242C31.3082 3.03617 34.4318 5.59962 36.6294 8.8886C38.827 12.1776 40 16.0444 40 20C39.9939 25.3025 37.8849 30.386 34.1355 34.1355C30.386 37.8849 25.3025 39.9939 20 40ZM20 2.85715C16.6095 2.85715 13.2951 3.86256 10.4759 5.74624C7.65682 7.62992 5.45958 10.3073 4.16207 13.4397C2.86457 16.5722 2.52509 20.019 3.18655 23.3444C3.84801 26.6698 5.48071 29.7244 7.87818 32.1218C10.2756 34.5193 13.3302 36.152 16.6556 36.8135C19.981 37.4749 23.4278 37.1354 26.5603 35.8379C29.6927 34.5404 32.3701 32.3432 34.2538 29.5241C36.1374 26.7049 37.1429 23.3905 37.1429 20C37.1376 15.4551 35.3297 11.0978 32.116 7.88402C28.9022 4.67026 24.5449 2.86244 20 2.85715Z"
              fill="#0ABAB5"
            />
          </svg>
          <div className=" flex flex-col">
            <h1
              className={`text-start text-xs md:text-2xl lg:text-4xl ${bebas.className} flex flex-row`}
            >
              YOUTH LEADERSHIP DEVELOPMENT
            </h1>
            <p className="text-xxss md:text-xs text-start">
              We have a passion and unmatchable experience to develop youth
              leaders across the globe.
            </p>
          </div>
        </div>
        {/* Heading 2 */}
        <div className="flex flex-row w-[35%] lg:w-[35%] xl:w-[30%]">
          <svg
            className="h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[45px] lg:w-[45px] mr-[2px] md:mr-1 "
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0001 34.2857C27.8898 34.2857 34.2858 27.8898 34.2858 20C34.2858 12.1102 27.8898 5.71429 20.0001 5.71429C12.1103 5.71429 5.71434 12.1102 5.71434 20C5.71434 27.8898 12.1103 34.2857 20.0001 34.2857Z"
              fill="#FF6F61"
            />
            <path
              d="M20 40C16.0444 40 12.1776 38.827 8.8886 36.6294C5.59962 34.4318 3.03617 31.3082 1.52242 27.6537C0.00866566 23.9991 -0.387401 19.9778 0.384303 16.0982C1.15601 12.2186 3.06082 8.65492 5.85787 5.85787C8.65492 3.06082 12.2186 1.15601 16.0982 0.384303C19.9778 -0.387401 23.9991 0.00866566 27.6537 1.52242C31.3082 3.03617 34.4318 5.59962 36.6294 8.8886C38.827 12.1776 40 16.0444 40 20C39.9939 25.3025 37.8849 30.386 34.1355 34.1355C30.386 37.8849 25.3025 39.9939 20 40ZM20 2.85715C16.6095 2.85715 13.2951 3.86256 10.4759 5.74624C7.65682 7.62992 5.45958 10.3073 4.16207 13.4397C2.86457 16.5722 2.52509 20.019 3.18655 23.3444C3.84801 26.6698 5.48071 29.7244 7.87818 32.1218C10.2756 34.5193 13.3302 36.152 16.6556 36.8135C19.981 37.4749 23.4278 37.1354 26.5603 35.8379C29.6927 34.5404 32.3701 32.3432 34.2538 29.5241C36.1374 26.7049 37.1429 23.3905 37.1429 20C37.1376 15.4551 35.3297 11.0978 32.116 7.88402C28.9022 4.67026 24.5449 2.86244 20 2.85715Z"
              fill="#FF6F61"
            />
          </svg>
          <div className=" flex flex-col">
            <h1
              className={`text-start text-xs md:text-2xl lg:text-4xl ${bebas.className} flex flex-row`}
            >
              ACADEMIA LEARNING SOLUTIONS
            </h1>
            <p className="text-xxss md:text-xs text-start">
              Student and teacher development programs are customized in
              partnership with leading universities and schools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
