"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does FlySky Europe provide?",
    answer:
      "We provide comprehensive study abroad services including university selection, application support, visa consultancy, test preparation guidance, and pre-departure assistance. We also offer free initial consultations to understand your goals.",
  },
  {
    question: "Which countries do you specialize in?",
    answer:
      "We specialize in European countries (Germany, UK, Ireland, France, Netherlands), USA, Canada, and Australia. We have expertise in both European and non-European destinations.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We offer transparent pricing based on the services you need. Our initial consultation is completely free. Contact us to discuss your requirements and get a customized quote.",
  },
  {
    question: "What is your visa success rate?",
    answer:
      "We maintain a 98% visa success rate thanks to our experienced team and thorough documentation process. We carefully review each application to maximize success chances.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The timeline varies by country and university. Generally, the process takes 6-12 months from application to departure. We recommend starting at least 12 months before your intended start date.",
  },
  {
    question: "Do you help with scholarships?",
    answer:
      "Yes! We guide students on available scholarships and help with scholarship applications. Many universities offer merit-based and need-based scholarships that we can help you apply for.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
