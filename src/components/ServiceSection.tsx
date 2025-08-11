import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Globe, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ServiceSection = () => {
  const mainPackage = {
    name: "LaunchPress Package",
    price: "$600",
    description: "Our main package featuring premium distribution across major platforms",
    features: [
      "Yahoo Finance publication", 
      "Digital Journal",
      "Business Insider exposure", 
      "Associated Press inclusion", 
      "Market Watch publication", 
      "Benzinga coverage", 
      "Street Insider placement", 
      "ABC, CBS, NBC, FOX and CW affiliates", 
      "Distribution to 500+ additional sites"
    ],
    popular: true
  };
  const pressReleaseExamples = [
    {
      image: "/lovable-uploads/444bd38d-6273-4ed5-9ac6-7fe7bf5a979b.png",
      title: "XYZ Media Uses Revolutionary Digital Marketing Techniques"
    }, 
    {
      image: "/lovable-uploads/35fdd0fd-87a1-4c43-bec6-56887d955c24.png",
      title: "House Hunters Officially Launches A Platform to Transform the Australian Home Buying Experience"
    }, 
    {
      image: "/lovable-uploads/b81d7de9-b9fd-45d4-94ca-e2d3422e3d9d.png",
      title: "Celebrating One Year of 5-Star Urgent Care Services in Clear Lake, Houston"
    }, 
    {
      image: "/lovable-uploads/ce83e721-8150-4540-b278-2e6d8aa74f6b.png",
      title: "WHITE ON WHITE Launches 2025 Mother's Day Flowers Bouquet Collection"
    },
    // Replace the Wiltshire-Led image with the new Digital Journal press release
    {
      image: "/lovable-uploads/9560a311-d7af-46b3-9b35-942b77c07ef2.png",
      title: "From Kangoo to the Big Screen: Rising Digital Star Kmsenkangooo Makes Waves in France and Beyond"
    },
    // Keep these and remove JobzSA and TOP 508 examples
    {
      image: "/lovable-uploads/74030156-dd93-465e-86ca-649437d59340.png",
      title: "Exploring OBN Digital's Commitment to Empowering Businesses with Comprehensive Marketing Solutions"
    },
    {
      image: "/lovable-uploads/cw_pr.png",
      title: "Aisles Introduces DREAM: The Next Evolution in AI-Powered Virtual Reality"
    },
    {
      image: "/lovable-uploads/cbs_pr.png",
      title: "Tom Hibberd Shares Expert Secrets in 'How to Choose a Wedding Photographer"
    },
    {
      image: "/lovable-uploads/abc_pr2.png",
      title: "GeekyAnts Expands Footprint in the U.S. to Serve Growing Demand for Digital Innovation"
    }
  ];
  
  return (
    <section id="service" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal">
            Choose our premium package that distributes your press release across major media platforms.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="relative overflow-hidden reveal border-primary/50 shadow-lg shadow-primary/10">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Main Package
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-primary" />
                <CardTitle>{mainPackage.name}</CardTitle>
              </div>
              <div className="flex items-end gap-1 mt-2">
                <span className="text-3xl font-bold">{mainPackage.price}</span>
                <span className="text-muted-foreground mb-1">/package</span>
              </div>
              <CardDescription className="mt-2">{mainPackage.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mainPackage.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary hover:bg-primary/90" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 max-w-5xl mx-auto reveal">
          <div className="glass-card rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Sample Press Release Publications
              </h3>
              <p className="text-muted-foreground">
                Here are examples of how your press release will appear across our distribution network:
              </p>
            </div>
            <div className="p-6">
              <Carousel className="w-full" opts={{
                align: "center",
                loop: true
              }}>
                <CarouselContent>
                  {pressReleaseExamples.map((example, index) => (
                    <CarouselItem key={index} className="md:basis-full">
                      <div className="border border-border rounded-lg bg-card/50 p-4">
                        <div className="flex flex-col items-center">
                          <img 
                            src={example.image} 
                            alt={`Press Release Example ${index + 1}`} 
                            className="w-full object-contain" 
                          />
                        
                          <div className="mt-2">
                            <h4 className="text-xl font-medium">{example.title}</h4>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center mt-4 gap-2">
                  <CarouselPrevious className="relative left-0 right-0 translate-y-0 h-10 w-10" />
                  <CarouselNext className="relative left-0 right-0 translate-y-0 h-10 w-10" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
