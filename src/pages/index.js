import { Inter } from "next/font/google";
import Hero from "./HomeComponent/Hero";
import SectionOne from "./HomeComponent/SectionOne";
import SectionTwo from "./HomeComponent/SectionTwo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    </>
  );
}
