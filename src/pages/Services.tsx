import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-6">OUR SERVICES</h1>
        <p className="text-2xl text-gray-300 mb-16">
          Explore our range of cutting-edge solutions designed to elevate your
          driving experience!
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">
              LANE CHANGE OPTIMIZATION
            </h2>
            <p className="text-gray-300">
              Utilizing advanced algorithms and real-time data, we ensure smooth and
              safe lane changes, enhancing your driving experience while minimizing
              risks on the highway.
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              Contact <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">
              PERFORMANCE ENHANCEMENT
            </h2>
            <p className="text-gray-300">
              Our expert team analyzes driving patterns to provide personalized
              insights, helping you improve acceleration and deceleration
              techniques for a more efficient journey.
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              Contact <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">SAFETY INSIGHTS</h2>
            <p className="text-gray-300">
              We offer comprehensive safety assessments that guide drivers in
              understanding highway dynamics, ensuring a safer journey through
              informed decision-making.
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              Contact <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;