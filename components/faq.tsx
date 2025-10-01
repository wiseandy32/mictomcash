"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started with investing?",
      answer:
        "Getting started is simple. Create an account, complete the verification process, choose an investment plan that suits your goals, and fund your account. You can start investing with as little as $500.",
    },
    {
      question: "When can I withdraw my returns?",
      answer:
        "You can withdraw your returns at the end of your investment period. For example, if you choose a 7-day plan, you can withdraw your principal plus returns after 7 days. Early withdrawal options are available with certain plans.",
    },
    {
      question: "Are my investments secure?",
      answer:
        "Yes, we employ bank-level security measures including SSL encryption, two-factor authentication, and cold storage for digital assets. We are also fully regulated and compliant with financial regulations.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods including bank transfers, credit/debit cards, and major cryptocurrencies. All transactions are processed securely through our encrypted payment gateway.",
    },
    {
      question: "Can I invest in multiple plans simultaneously?",
      answer:
        "You can diversify your portfolio by investing in multiple plans at the same time. This strategy helps spread risk and potentially maximize your overall returns.",
    },
    {
      question: "What happens if I need to withdraw early?",
      answer:
        "While we recommend completing the full investment term for maximum returns, early withdrawal options are available. Terms and conditions vary by plan, and there may be fees associated with early withdrawal.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Find answers to common questions about our investment platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground text-pretty">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
