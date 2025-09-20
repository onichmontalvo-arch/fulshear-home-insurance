import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone } from "lucide-react";
const BUSINESS_DATA = {
  phone: "(346) 450-8384",
  phoneTel: "+13464508384"
};
export const FAQSection: React.FC = () => {
  const faqs = [{
    question: "Is homeowners insurance required in Texas?",
    answer: "Texas doesn't legally require homeowners insurance, but mortgage lenders do. Even if your home is paid off, it protects your largest asset. The risk of going without coverage far outweighs the premium cost."
  }, {
    question: "What's the difference between market value and rebuild cost?",
    answer: "Market value is what you'd sell your home for (includes land value, location). Rebuild cost is what it costs to reconstruct your home with today's materials and labor. Insurance covers rebuild cost, not market value. In hot markets, rebuild cost is often less than market value."
  }, {
    question: "Do I need flood insurance in Fulshear?",
    answer: "Homeowners insurance excludes flood damage. Even 'low-risk' areas can flood from heavy rain, construction impacts, or infrastructure issues. Fort Bend County saw massive flooding during Harvey 2017. We recommend flood coverage for all homeowners and quote both NFIP and private options."
  }, {
    question: "How do wind/hail percentage deductibles work?",
    answer: "Texas carriers typically use percentage deductibles for wind/hail claims. On a $550,000 dwelling: 1% = $5,500 out of pocket, 2% = $11,000. Lower percentage = higher premium but less risk. Consider your roof age and financial comfort level."
  }, {
    question: "Will my older roof be depreciated (ACV)?",
    answer: "Many carriers switch to Actual Cash Value (ACV) on roofs 10+ years old, meaning they pay replacement cost minus depreciation. You can often add a Replacement Cost Value (RCV) endorsement. We check your policy and explain options clearly."
  }, {
    question: "What liability limit should I choose? When do I need umbrella coverage?",
    answer: "Standard liability limits are $100K-$500K. Consider umbrella coverage if you have: significant assets to protect, pool/trampoline, teen drivers, or high-risk activities. Umbrella policies start around $1M and are relatively inexpensive for the protection they provide."
  }, {
    question: "Are jewelry and collectibles fully covered?",
    answer: "Personal property coverage has limits on jewelry, art, collectibles (often $1,000-$2,500 per item). For valuable items, you'll want to 'schedule' them separately with appraisals for full replacement cost coverage."
  }, {
    question: "Can I use my home for short-term rentals (Airbnb/VRBO)?",
    answer: "Standard homeowners policies exclude business use including short-term rentals. You need to notify your carrier and may need a different policy or endorsement. Operating without proper coverage could void your entire policy."
  }, {
    question: "How much Loss of Use coverage is enough for Fulshear?",
    answer: "Loss of Use covers additional living expenses if your home is uninhabitable. Look at local hotel and short-term rental rates. In Fulshear, plan for $200-400/night plus meals and other expenses. Many policies offer 20-30% of dwelling coverage."
  }, {
    question: "How can I lower my premium without losing protection?",
    answer: "Bundle home + auto, increase deductibles strategically, maintain good credit, add security systems, keep claims-free record, shop annually. We focus on finding real savings while maintaining proper protection levels."
  }, {
    question: "How do insurance claims affect my renewal?",
    answer: "Claims typically stay on your record 3-7 years. Multiple claims can lead to non-renewal. However, don't avoid legitimate claims for coverage you've paid for. We help you understand when to file vs. pay out of pocket."
  }, {
    question: "When should I review my coverage?",
    answer: "Review annually and after major changes: new roof, home renovation, pool installation, teen driver, marriage/divorce, significant asset changes, or major purchases. Life changes often mean new discounts or coverage needs."
  }, {
    question: "What happens during a wind/hail claim in Texas?",
    answer: "Report immediately, document damage with photos, get inspections from adjuster and contractors, understand RCV vs. ACV payments, watch for scope gaps. We help coordinate the process and advocate for proper settlement."
  }, {
    question: "Do I need separate coverage for my detached garage or workshop?",
    answer: "Detached structures are covered under 'Other Structures' (typically 10% of dwelling coverage). For expensive workshops, garages with living space, or high-value contents, you may need to increase this coverage."
  }, {
    question: "What's the difference between named perils and open perils coverage?",
    answer: "Named perils policies only cover specifically listed risks. Open perils (HO-3) covers everything except what's specifically excluded. Open perils offers broader protection and is standard for most homeowners policies."
  }, {
    question: "How does my credit score affect my homeowners insurance?",
    answer: "In Texas, carriers can use credit-based insurance scores to determine rates (where allowed by law). Better credit typically means lower premiums. This is separate from your regular credit score and focuses on insurance-related factors."
  }];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Homeowners Insurance Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get expert answers to common questions about homeowners insurance in Fulshear and Fort Bend County.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-12 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-center">Still Have Questions?</CardTitle>
              <CardDescription className="text-center">
                Our local insurance experts are here to help with personalized advice for your Fulshear home.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_DATA.phone} for Expert Advice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;