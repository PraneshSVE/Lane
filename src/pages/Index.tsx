import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollingText from "@/components/ScrollingText";
import Newsletter from "@/components/Newsletter";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">ABOUT HIGHWAY LANE</h1>
          <h2 className="text-2xl text-primary mb-8">
            TRANSFORMING HIGHWAY NAVIGATION WITH ADVANCED TECHNOLOGY
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mb-12">
            Highway Lane is at the forefront of innovation in autonomous vehicle
            navigation, combining expertise in reinforcement learning and decision
            frameworks. Our goal is to enhance the safety and efficiency of highway
            driving through intelligent maneuvering solutions.
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
      </section>

      <ScrollingText />

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <h2 className="text-2xl font-medium mb-8">Lucas Evans</h2>
              <div className="text-[80px] text-primary font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                ""
              </div>
              <p className="text-4xl font-bold leading-tight mb-8">
                I AM THRILLED WITH THE SERVICE FROM HIGHWAY LANE. THEIR TEAM WAS ATTENTIVE AND PROVIDED CLEAR GUIDANCE ON OPTIMIZING MY DRIVING MANEUVERS. TRULY A GAME-CHANGER!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/lovable-uploads/ad5858de-9816-48b2-aaff-27ad1f01ac2c.png"
              alt="Contact"
              className="rounded-2xl shadow-2xl"
            />
            <div className="space-y-8">
              <h1 className="text-6xl font-bold">GET IN TOUCH WITH US</h1>
              <p className="text-xl text-gray-300">
                We would love to hear from you and discuss your driving needs.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;