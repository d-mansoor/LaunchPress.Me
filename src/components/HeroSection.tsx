import { Button } from "@/components/ui/button";
import { Asterisk } from "lucide-react";

const HeroSection = () => {
    // Define top row logos (non-TV networks) - now with 6 items including the new ones
    const topRowLogos = [
      { src: "/lovable-uploads/f6b7a8f2-c1cd-4f02-a37f-f0386dfc3780.png", alt: "Yahoo Finance" },
      { src: "/lovable-uploads/Morningstar.png", alt: "Morningstar" },
      { src: "/lovable-uploads/e813b4af-3032-4d85-99d2-a60954ddb18b.png", alt: "Digital Journal" },
      { src: "/lovable-uploads/4100bf70-914b-4b92-9a94-2fe53b32dd72.png", alt: "MSN" },
      { src: "/lovable-uploads/a3188fa1-3425-4a5f-96e7-6c872903f3a8.png", alt: "Associated Press" },
    ];
    
    // Define bottom row logos (TV networks) with the CBS and NBC logos
    const bottomRowLogos = [
      { src: "/lovable-uploads/Fox_News-Logo.wine.png", alt: "Fox News" },
      { src: "/lovable-uploads/the-cw.png", alt: "The CW" },
      { src: "/lovable-uploads/abc.png", alt: "ABC News" },
      { src: "/lovable-uploads/f3a811aa-64b1-4e8b-b8f0-6d1b52479d4e.png", alt: "NBC" },
      { src: "/lovable-uploads/eaf223aa-2ea5-4d2b-bad7-6b48fe1ac7a1.png", alt: "CBS" },
      // Keeping a 6th empty slot for symmetric layout
      { src: "", alt: "" },
    ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background z-0"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Amplify Your <span className="gradient-text">Brand Voice</span> Through Premium Media Platforms
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
           Get your press releases published on Yahoo Finance, MSN, Business Insider and ABC, CBS, NBC, FOX and CW affiliates and many more—to boost visibility, build trust and credibility
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 animate-pulse"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('service')?.scrollIntoView({behavior: 'smooth'})}>
              Services
            </Button>
          </div>
          
          {/* Media logos with white background and separated into two rows */}
          <div className="mt-16 bg-white p-6 rounded-lg w-full">
            {/* Top row - non-TV network logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8 justify-items-center">

              {topRowLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-32 h-24">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              ))}
            </div>
            
            {/* Bottom row - TV network logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8 justify-items-center">
              {bottomRowLogos.filter(logo => logo.src).map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-32 h-24">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground max-w-3xl flex items-start gap-1">
            <Asterisk className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
            <span>
              Press releases are distributed through affiliate partner networks of ABC, CBS, NBC, FOX and CW, ensuring broad reach while maintaining editorial standards.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
