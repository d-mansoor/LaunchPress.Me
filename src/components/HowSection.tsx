
import { useState, useEffect, useRef } from "react";
import { ClipboardList, FileText, CheckCircle, Send, Globe, FileCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const HowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const steps = [
    {
      number: "01",
      title: "Share Your Details",
      description: "We collect information about your business, goals, and what you'd like to share. This helps us understand the message you want to communicate.",
      icon: ClipboardList
    },
    {
      number: "02",
      title: "We Write Your Press Release",
      description: "Our team writes a clear and professional news story based on your input, tailored to your brand and objectives.",
      icon: FileText
    },
    {
      number: "03",
      title: "You Review and Approve",
      description: "We send the draft to you for approval. You can suggest edits or changes to make sure everything sounds right.",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "We Handle Distribution",
      description: "Once approved, we distribute your press release to trusted media outlets and submit it to Google News.",
      icon: Send
    },
    {
      number: "05",
      title: "Your Story Gets Published",
      description: "Your press release is published on major media sites like Yahoo Finance, MSN, Business Insider and ABC, CBS, NBC, FOX and CW affiliates and many more.",
      icon: Globe
    },
    {
      number: "06",
      title: "We Send You the Report",
      description: "Within 15 business days, you receive a PDF report with links to all the sites where your press release was published.",
      icon: FileCheck
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepIndex = stepsRef.current.findIndex(ref => ref === entry.target);
          if (stepIndex !== -1) {
            setActiveStep(stepIndex + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    stepsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="how" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            HOW <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal">
            Our streamlined process ensures your press release reaches the right platforms with minimal effort on your part.
          </p>
        </div>

        <div className="mb-8 max-w-4xl mx-auto reveal">
          <Progress value={(activeStep / steps.length) * 100} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <Card 
                key={index} 
                ref={el => stepsRef.current[index] = el}
                className={`p-6 flex flex-col items-center text-center border border-border/40 bg-card/50 reveal transition-all duration-300 ${activeStep >= index + 1 ? 'shadow-md shadow-primary/10' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <span className="inline-block px-3 py-1 bg-muted/50 rounded-full text-sm font-medium mb-3">
                  Step {step.number}
                </span>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowSection;
