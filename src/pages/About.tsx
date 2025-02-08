import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-6">ABOUT HIGHWAY LANE</h1>
        <h2 className="text-2xl text-primary mb-8">
          TRANSFORMING HIGHWAY NAVIGATION WITH ADVANCED TECHNOLOGY
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mb-12">
          Highway Lane is at the forefront of innovation in autonomous vehicle
          navigation, combining expertise in reinforcement learning and decision
          frameworks. Our goal is to enhance the safety and efficiency of highway
          driving through intelligent maneuvering solutions. By providing tailored
          technology that optimizes lateral and longitudinal movements, we empower
          drivers and autonomous systems alike to navigate highways with confidence
          and precision.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src="/lovable-uploads/16bbf3d2-6f00-42c9-a77d-784ab321d827.png"
            alt="Car Interior"
            className="rounded-2xl shadow-2xl"
          />
          <img
            src="/lovable-uploads/bbc51e1f-5aff-48e5-a942-ffe227fcc832.png"
            alt="Highway Lane Logo"
            className="rounded-2xl shadow-2xl bg-black p-12"
          />
        </div>
      </div>
    </div>
  );
};

export default About;