import localFont from "next/font/local";

export const cy = localFont({
    src: [
      {
        path: "../../public/Cy Grotesk Wide Bold.ttf",
        weight: "400",
      },
      {
        path: "../../public/Cy Grotesk Key Bold.ttf",
        weight: "700",
      },
      {
        path: "../../public/Cy Grotesk Grand Bold.ttf",
        weight: "800",
      },
      
    ],
    variable: "--font-cy-grotesk",
  });