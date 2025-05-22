
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  
  return (
    <footer className="bg-muted/50 py-12 px-4 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-border">
          <div className="mb-8 md:mb-0 md:max-w-xs">
            <h3 className="text-xl font-bold mb-4">LaunchPress.Me</h3>
            <p className="text-muted-foreground">
              Amplifying your brand through strategic distribution on premium media platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#service" className="text-muted-foreground hover:text-primary transition-colors">Distribution Packages</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTermsOfService(true)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} LaunchPress.Me. All rights reserved.
          </p>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-foreground">
            <div className="space-y-4 text-left">
              <p>
                LaunchPress.Me is a newswire service which distributes press releases on behalf of our customers. Your privacy is very important to us. We are committed to establishing and maintaining policies and procedures which protect the privacy of personal information gathered from our customers and visitors from our website. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used.
              </p>
              
              <h3 className="text-lg font-semibold">Information Gathered from Visitors</h3>
              <p>
                When visiting LaunchPress.Me, the IP address used to access the site will be logged along with the dates and times of access. This information is only used to analyze trends, administer the site, track users' movement and gather broad demographic information for internal use. Most importantly, ALL recorded IP addresses are not linked to personally identifiable information.
              </p>
              
              <p>
                Cookies may be used to remember visitor preferences when interacting with the website. They may be used to track your return visits to the website.
              </p>
              
              <p>
                Where registration is required, the visitor's email, username and other relevant information will be stored on the server. Email addresses will NEVER be sold, rented or leased to 3rd parties. Emails may be sent to inform you of news of our services or offers by us.
              </p>
              
              <h3 className="text-lg font-semibold">Third-Party Sites</h3>
              <p>
                We have included links on this site for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these sites may differ from our own.
              </p>
              
              <h3 className="text-lg font-semibold">Changes to this Privacy Statement</h3>
              <p>
                From time to time, the contents of this statement may be altered at any time, at our discretion. To keep up-to-date with LaunchPress.Me policy, please check this page periodically. If you have any questions regarding the privacy policy of LaunchPress.Me, you may contact us using the contact us form.
              </p>
              
              <p>
                The information we collect is disclosed when legally required to do so, at the request of governmental authorities conducting an investigation, to verify or enforce compliance with the policies governing our website and applicable laws or to protect against misuse or unauthorized use of our Website.
              </p>
              
              <p>
                If you feel that this site is not following its stated information policy, you may contact us.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setShowPrivacyPolicy(false)}>Close</Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Dialog */}
      <Dialog open={showTermsOfService} onOpenChange={setShowTermsOfService}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-foreground">
            <div className="space-y-4 text-left">
              <p>
                Welcome to LaunchPress.Me. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms, along with our Privacy Policy. If you do not agree with these Terms, please do not use our services.
              </p>
              
              <h3 className="text-lg font-semibold">1. Overview</h3>
              <p>
                LaunchPress.Me provides press release writing and distribution services. All content submitted and published through our platform is subject to approval, editing, and removal in accordance with these Terms. We aim to offer high-quality distribution, but we do not guarantee results such as media placement, website traffic, leads, SEO rankings, or verification on social platforms.
              </p>
              
              <h3 className="text-lg font-semibold">2. Content Submission & Usage Policy</h3>
              <p>
                By submitting a press release or content to LaunchPress.Me, you agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The content must be accurate, truthful, and not misleading.</li>
                <li>The content must not contain any material that is defamatory, libelous, obscene, hateful, or otherwise unlawful.</li>
                <li>The content must not violate any intellectual property, privacy, publicity, or contractual rights of others.</li>
                <li>The content must comply with all applicable laws, including those related to unsolicited communications (spam).</li>
              </ul>
              
              <p>
                We reserve the right to approve, reject, edit, or remove any submission at our sole discretion, without prior notice. Any decision made by LaunchPress.Me regarding content is final.
                We do not accept press releases that are purely promotional in nature, advertisements, or contain links to websites with intrusive pop-ups or deceptive practices. Such content may be removed without notice.
              </p>
              
              <h3 className="text-lg font-semibold">3. Publishing & Editorial Rights</h3>
              <p>
                Once a press release is approved and published:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>It cannot be edited or modified.</li>
                <li>If you require changes after publication, a new order must be placed.</li>
                <li>We do not guarantee permanent availability of the article, as third-party publishers may remove or archive it at any time.</li>
                <li>Distribution partners have full control over whether they publish, retain, or remove any content sourced from LaunchPress.Me.</li>
              </ul>

              <h3 className="text-lg font-semibold">4. Refund Policy</h3>
              <p>
                We offer a 100% refund if we are unable to publish your press release through our distribution network.
                Once an article is successfully published, no refunds will be issued, regardless of any requests for changes, takedown, or dissatisfaction with results.
              </p>
              
              <h3 className="text-lg font-semibold">5. Use of Submitted Content</h3>
              <p>
                By using LaunchPress.Me and submitting content, you grant LaunchPress.Me and its affiliates a worldwide, non-exclusive, royalty-free, irrevocable license to use, reproduce, modify, distribute, publish, archive, and display your press release content in connection with operating and promoting our services.
                You also authorize LaunchPress.Me to share your contact information with third parties when reasonably necessary to verify information or respond to legal or editorial inquiries.
              </p>
              
              <h3 className="text-lg font-semibold">6. Disclaimer of Liability</h3>
              <p>
                All press releases and related materials published through LaunchPress.Me are provided "as is." We make no warranties or guarantees, express or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Placement on specific media sites</li>
                <li>SEO impact, search engine rankings, or traffic results</li>
                <li>Leads, conversions, or sales performance</li>
                <li>Content remaining live on third-party sites</li>
              </ul>
              <p>
                You use our services at your own risk. LaunchPress.Me is not responsible for any loss or damage arising from your use of the website or services, including reliance on content or publication results.
              </p>
              
              <h3 className="text-lg font-semibold">7. Intellectual Property</h3>
              <p>
                All content on the LaunchPress.Me website—including design, branding, layout, and graphics—is owned by LaunchPress.Me and protected by copyright and other intellectual property laws. Unauthorized reproduction or use is prohibited.
                You may share or cite published content if proper credit is given to LaunchPress.Me, including a link back to the source.
              </p>
              
              <h3 className="text-lg font-semibold">8. External Links</h3>
              <p>
                Our website may contain links to third-party websites for informational purposes. These links do not imply endorsement, and LaunchPress.Me is not responsible for the content or availability of external sites.
              </p>
              
              <h3 className="text-lg font-semibold">9. Changes to Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of our services after any updates constitutes your acceptance of the revised Terms.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setShowTermsOfService(false)}>Close</Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
