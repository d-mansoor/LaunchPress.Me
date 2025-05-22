
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const testimonials = [
    {
      name: "John",
      image: "/lovable-uploads/f4e2cdca-cb27-423e-a5cd-9cc954275ee8.png",
      quote: "We have seen a significant increase in our rankings and organic traffic following a great news release that was published by LaunchPress.Me. We were impressed by the quality and outcome of the work and service and hope that we can get the chance to continue using their services to take our business to the next level. We would highly recommend anyone with an online business to consider this service",
      rating: 5,
    },
    {
      name: "Kyle G.",
      image: "/lovable-uploads/314a8219-4969-4aea-8246-b538cfd46fd8.png",
      quote: "As a business owner in a competitive industry, it's often difficult to generate a buzz surrounding our brand and products. That's where LaunchPress.Me came in. They quickly wrote us a press release and had it distributed and published to a ton of major news outlets with a week or two. I was extremely impressed with their speed and performance.",
      rating: 5,
    },
    {
      name: "Charlene Rountree",
      image: "/lovable-uploads/7c9e0038-2360-4669-a743-6f11e1285e1b.png",
      quote: "Working with LaunchPress.Me was swift and easy. They took care of writing up a media post describing our company and products in a very succinct fashion and \"spreading the word\" through the major news channels of FOX, ABC, NBC, and CBS. The whole experience was quite nice. It was much appreciated!",
      rating: 5,
    },
    {
      name: "Ross Warden",
      image: "/lovable-uploads/4362f26c-3cc7-40a7-aaa9-8990da2e90f1.png",
      quote: "The ranking was a much less important factor for us, so that was frosting on the cake. You definitely delivered on getting the article onto all the major sites you said you would and that has been very valuable for us. Thanks!",
      rating: 4,
    },
    {
      name: "Robert Large",
      image: "/lovable-uploads/c7bcc5d9-d486-451f-8924-2150cb5bf010.png",
      quote: "We are very happy with the service that we were provided with by LaunchPress.Me. Everything went very smooth and the team was awesome to work with! Will do business with them again!",
      rating: 5,
    },
  ];

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-primary text-primary" : "text-muted"}
        />
      ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal">
            Don't just take our word for it. Here's what our clients have to say about our press release services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          <Carousel className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <Card className="glass-card overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <MessageSquare size={18} className="text-primary" />
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                      <blockquote className="text-lg italic mb-6 text-foreground/90">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <Avatar className="h-16 w-16 mr-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-medium text-lg">{testimonial.name}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 h-10 w-10" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
