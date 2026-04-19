import Accommodation from "@/components/Accommodation";
import Attractions from "@/components/Attractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <Header/>
        <Accommodation/>
        <Gallery/>
        <Attractions/> 
        <Contact/>
        <Footer/>
      </main>
    
  );
}
