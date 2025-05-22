
import { Check, CheckCircle } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      title: "Enhanced Credibility",
      description: "Boost your brand's reputation by appearing on trusted media platforms that consumers recognize and value."
    },
    {
      title: "Wider Reach",
      description: "Access millions of potential customers through major news and financial platforms."
    },
    {
      title: "Brand Visibility",
      description: "Increase your digital footprint and appear in more relevant searches across the web."
    },
    {
      title: "Investor Attention",
      description: "Catch the eye of potential investors who regularly monitor financial news platforms."
    },
    {
      title: "Competitive Edge",
      description: "Stand out from competitors by establishing a presence on prestigious media outlets."
    }
  ];

  const firstRowBenefits = benefits.slice(0, 3);
  const secondRowBenefits = benefits.slice(3, 5);

  return (
    <section id="why" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            WHY <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal">
            Our press release distribution service provides tangible benefits that directly impact your business growth and online presence.
          </p>
        </div>

        {/* First row with 3 benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {firstRowBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with 2 benefits, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
          {secondRowBenefits.map((benefit, index) => (
            <div 
              key={index + 3} 
              className="glass-card p-6 rounded-lg reveal"
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
