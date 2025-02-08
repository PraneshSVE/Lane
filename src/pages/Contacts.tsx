import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
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
            <div className="flex gap-8">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-5 w-5" />
                <span>support@hello.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-5 w-5" />
                <span>+1-202-555-0127</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <Input
                  placeholder="Your name here"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <Input
                  type="email"
                  placeholder="Your email here"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Message</label>
                <Textarea
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;