import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 pt-20">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold leading-tight">
            WELCOME TO HIGHWAY LANE
          </h1>
          <p className="text-xl text-gray-300">
            From seamless lane changes to efficient acceleration and deceleration,
            our innovative solutions are designed to enhance every aspect of your
            journey on the highway.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          >
            <Link to="/services">Services</Link>
          </Button>
        </div>
        <div className="relative">
          <img
            src="/lovable-uploads/cd870826-a6ae-4f1c-b8f2-760a862ecaa4.png"
            alt="Car Dashboard"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;