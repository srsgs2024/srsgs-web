"use client";
import { useEffect, useState } from "react";
import Briefintroduction from "@/components/Briefintroduction";
import Campaign from "@/components/Campaign";
import Clickforinformation from "@/components/Clickforinformation";
import Cowprotectionwork from "@/components/Cowprotectionwork";
import Daankare from "@/components/Daankare";
import Footer from "@/components/Footer";
import Gaysanrakshan from "@/components/Gaysanrakshan";
import Maincharacteristics from "@/components/Maincharacteristics";
import Navbar from "@/components/Navbar";
import OurAim from "@/components/OurAim";
import Prasadamarrangement from "@/components/Prasadamarrangement";
import UpdateNew from "@/components/UpdateNew";
import Marquee from "react-fast-marquee";
import { ArrowFatLineUp } from "@phosphor-icons/react";
import PrasadamarrangementDetails from "@/components/PrasadamarrangementDetails";
import GaushalaYojana from "@/components/GaushalaYojana";
// import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const people = [
    { name: "Mr Upendra Ozha" },
    { name: "Mr Ashwani Kumar" },
    { name: "Mr Anand Prakash Tiwari" },
    { name: "Mr Chandrashekhar Nagpal" },
    { name: "Mr Manvendra Tyagi" },
    { name: "Mr Sunil Thakur" },
    { name: "Mr Priyam Agarwal" },
    { name: "Mr Chander Shekhar Gupta" },
    { name: "Mrs Neha" },
    { name: "Mr Mukesh Kumar" },
    { name: "Dr Vinod Kumar" },
    { name: "Mrs Garima" },
    { name: "Mr Anirudh Agarwal" },
    { name: "Ms Gunjan" },
    { name: "Mr Ayush Agarwal" },
    { name: "Mr Arun Bansal" },
    { name: "Mr Ashwani Gaur" },
    { name: "Ms Pustii" },
    { name: "Ms Meenu Bhattacharjee" },
    { name: "Mr Deepak Narula" },
    { name: "Mr Puneet Kumar" },
    { name: "Mrs Srashti Mittal" },
    { name: "Mrs Rakhi Agarwal" },
    { name: "Mr Anmol Kapoor" },
    { name: "Mr Rakesh Dixit" },
    { name: "Mrs Sakshi Thakur" },
    { name: "Mr Rajesh Yadav" },
    { name: "Mr Ajay Sharma" },
    { name: "Mr Naresh Tyagi" },
  ];

  return (
    <>
      <div className="text-[18px] fixed w-full flex items-center overflow-hidden top-0 z-[999] text-yellow-100 bg-green-800 text-center py-2 shadow-2xl font-semibold tracking-wide">
        <Marquee pauseOnClick pauseOnHover className="flex gap-4 px-4">
          {[...people, ...people].map((person, index) => (
            <div key={index} className="px-3">
              <p>{person.name}</p>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="">
        <Navbar />
        <Daankare />
        <Briefintroduction />
        <Maincharacteristics />
        <Prasadamarrangement />
        <PrasadamarrangementDetails />
        <GaushalaYojana />
        <Gaysanrakshan />
        <OurAim />
        <Clickforinformation />
        <Footer />
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6  p-3 transition"
        >
          <ArrowFatLineUp size={44} color="#ff814e" />
        </button>
      )}
    </>
  );
}
