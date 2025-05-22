
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How to place an order?",
      answer: "Email us at contact@launchpress.me or contact on +1 (587) 936-8665"
    },
    {
      question: "Do you guarantee publication on all the media outlets?",
      answer: "Publication is guaranteed on GlobeNewsWire, publication on other media outlets depends upon your content and is not guaranteed."
    },
    {
      question: "Do I get a report with live links to published press releases?",
      answer: "Yes, we will provide an Excel report with live links to your published press releases."
    },
    {
      question: "Can I include images/youtube video & hyperlinks in the press release?",
      answer: "Yes, up to 5 hyperlinks and 5 images can be included in the press release."
    },
    {
      question: "Are press release publications permanent?",
      answer: "Yes, they are permanent. However please note, these are third party media sites over which we have no control. We have no influence over their future decisions, including switching links from dofollow to nofollow, setting them to no-index, or even removing the content. No Refunds or Replacements, we have a strict NO Refund Policy once published. There is no time guarantee."
    },
    {
      question: "Can I see/edit the press release before it's published?",
      answer: "Yes, you must approve the press release before it gets distributed. You will be able to see, edit and request necessary changes."
    },
    {
      question: "Can I request edits after the press release is published?",
      answer: "Please note, no changes can be made once the press release is published! Hence, we send the press release for your approval before distribution. And distribute only once you have reviewed and approved the press release."
    },
    {
      question: "Would all the links in the reports get indexed on Google?",
      answer: "No, only top links will get indexed and we can't guarantee which ones or how many."
    },
    {
      question: "Will this service benefit my website in terms of SEO and rankings? Are the backlinks dofollow?",
      answer: "The backlinks are redirect links and nofollow. However, some of our clients have seen improvements in their rankings on Google after the service. But, we can not guarantee an increase in rankings as there are numerous other factors involved as well."
    },
    {
      question: "What is the refund policy?",
      answer: "If your press release isn’t published, you’ll receive a full refund. Once it’s live, refunds are not available — even if you request changes.Please note: we don’t control third-party platforms. If they remove your release after publishing, we can’t guarantee edits or reinstatement."
    },
    {
      question: "Will I be able to prove that my brand is cited on multiple news outlets?",
      answer: "Yes, we will send you live links to your news release on mutiple news outlets."
    },
    {
      question: "Can I use the logos of these news outlets on my website?",
      answer: "We are not affiliated with any of those news outlets, so we can not officially give permission to use their logos. But its common practice to use them in this way as long as you do not imply that they are endorsing you or your business."

    },
    {
      question: "Can I see a sample report?",
      answer: "You can request us a sample report through our contact form and we will send you a sample excel report within 24 hours."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 reveal">
            <HelpCircle size={30} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal">
            Find answers to common questions about our press release distribution services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full reveal">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-medium text-lg py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-left text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center reveal">
          <p className="text-muted-foreground">
            Still have questions? Contact our team for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
