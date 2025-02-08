import Navbar from "@/components/Navbar";
import { useState } from "react";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Lucas Evans",
      text: "I AM THRILLED WITH THE SERVICE FROM HIGHWAY LANE. THEIR TEAM WAS ATTENTIVE AND PROVIDED CLEAR GUIDANCE ON OPTIMIZING MY DRIVING MANEUVERS. TRULY A GAME-CHANGER!",
    },
    // Add more reviews here
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  currentSlide === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <h2 className="text-2xl font-medium mb-8">{review.name}</h2>
                <div className="text-[80px] text-primary font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                  ""
                </div>
                <p className="text-4xl font-bold leading-tight mb-8">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-gray-600"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;