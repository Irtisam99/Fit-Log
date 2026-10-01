import Hero from "@/components/homepage/Hero";
import Library from "@/components/homepage/Library";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Library></Library>
    </>
  );
}
