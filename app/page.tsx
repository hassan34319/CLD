import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import AboutUs from "./(HomeComponents)/AboutUs";
import Events from "./(HomeComponents)/Events";
import Explore from "./(HomeComponents)/Explore";
import HeroSection from "./(HomeComponents)/HeroSection";
import Partners from "./(HomeComponents)/Partners";
import Footer from "./(UIComponents)/Footer";
import Header from "./(UIComponents)/Header";
import { client } from "./utils/client";
import { urlFor } from "./utils/UrlImage";


export const revalidate = 60
export default async function Home() {
  const partners = await client.fetch(`
    *[_type == "partners"] {
      ...
    }
  `);
  const activities = await client.fetch(`
  *[_type == "activity"] {
    ...
  }
`);
  const socialPosts = await client.fetch(`
    *[_type == "socialPost"] {
      ...
    }
  `);
  const gallery = await client.fetch(`
    *[_type == "gallery"] {
      ...
    }
  `);
  const banners = await client.fetch(`
  *[_type == "homePageBanner"] {
    ...
  }
`);
  return (
    <main className="w-full h-max bg-black text-white">
      <Header />
      {/* Banner */}
      <div className="w-[90%] md:w-[90%] mx-auto h-48 md:h-[24rem] lg:h-[40rem] relative">
        <Image src={urlFor(banners[0].banner).url()} alt="banner" fill className="object-contain" />
      </div>
      {/* About Us Intro */}
      <AboutUs home={true} />
      <HeroSection />
      <Events activities={activities} gallery={gallery}/>
      <Partners partners={partners} />
      <Explore socialPosts={socialPosts} />
      <Footer/>
    </main>
  );
}
