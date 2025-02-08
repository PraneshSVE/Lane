const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white">
          Highway Lane
        </button>
        <div className="flex gap-8">
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('reviews')} className="text-white hover:text-primary transition-colors">
            Reviews
          </button>
          <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-primary transition-colors">
            Contacts
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;