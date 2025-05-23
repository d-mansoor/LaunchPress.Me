import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal">
            Ready to amplify your brand's voice? Contact us today to get started with our premium press release distribution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="glass-card p-8 rounded-lg reveal">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

            <form
              action="https://formsubmit.co/contact@launchpress.me"
              method="POST"
              className="space-y-4"
            >
              {/* Optional: disable captcha & redirect */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://launchpress.me?sent=true" />

              <Input
                placeholder="Your Name"
                name="name"
                required
                className="bg-card"
              />
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className="bg-card"
              />
              <Textarea
                placeholder="Your Message"
                name="message"
                required
                className="bg-card min-h-[120px]"
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center reveal">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Have questions about our services? Reach out to us directly.
              </p>
            </div>

            <div className="space-y-6 w-full text-center">
              <a
                href="mailto:contact@launchpress.me"
                className="block p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground mt-1">contact@launchpress.me</div>
                </div>
              </a>

              <a
                href="https://wa.me/15879368665"
                className="block p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-medium">Whatsapp</div>
                  <div className="text-muted-foreground mt-1">+1 (587) 936-8665</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
