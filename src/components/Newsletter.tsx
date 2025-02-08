import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for joining our community.",
    });
    setEmail("");
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-12 max-w-2xl mx-auto relative">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <img
          src="/lovable-uploads/bbc51e1f-5aff-48e5-a942-ffe227fcc832.png"
          alt="Logo"
          className="w-24 h-24 bg-black rounded-full p-4"
        />
      </div>
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">
          JOIN OUR COMMUNITY OF INNOVATORS
        </h2>
        <p className="text-gray-600">
          Stay updated with Highway Lane: Subscribe for exclusive insights,
          updates, and resources delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;