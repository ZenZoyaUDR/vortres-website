import dynamic from "next/dynamic";
import Img from "next/image";
import { Metadata } from "next";

// Components
const Footer = dynamic(() => import("../components/Footer"));
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const metadata: Metadata = {
  title: "Vortres | Home",
  description: "Vortres is a Minecraft server with fun and uniqe gamemode.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen flex items-center justify-center">
        <Img
          src="/Red.webp"
          alt="Hero Image"
          fill={true}
          placeholder="blur"
          blurDataURL="/Red.webp"
          loading="eager"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome to My Server
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore, Build, Survive - Join the Adventure!
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Join Now
          </button>
        </div>
      </div>

      <section id="gamemodes" className="max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center">
          <Card
            title="Survival"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
          <Card
            title="Creative"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
          <Card
            title="Skyblock"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
