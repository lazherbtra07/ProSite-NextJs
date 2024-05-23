import Image from "next/image";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Frequently } from "./components/Frequently";
import { Pricing } from "./components/Pricing";
import { Careers } from "./components/Careers";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Frequently data={[]} />
      <Pricing />
      <Careers />
    </>
  );
}
