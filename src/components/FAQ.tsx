import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-800 py-2">
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none transition-colors"
      >
        <h3 className="text-white text-lg md:text-xl font-medium">{question}</h3>
        <ChevronDown
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Keesa keep my data safe?",
      answer:
        "Keesa reads only your financial SMS. It never touches sensitive data like OTPs or passwords. Your data stays local — nothing is uploaded unless you choose to."
    },
    {
      question: "What’s so different about Keesa?",
      answer:
        "Most apps just track. Keesa interprets. It understands your real money behavior and uses AI to guide, not just report. No noise — just smart signals."
    },
    {
      question: "Will Keesa ever ask for my bank login?",
      answer:
        "Never. Keesa runs entirely on your SMS inbox — no bank logins, no account linking, no permissions beyond SMS. It’s private by design."
    },
    {
      question: "Is Keesa for someone like me?",
      answer:
        "If you spend, Keesa fits. Whether you’re saving, spending, or just want clarity — Keesa works silently in the background to help you do money better."
    },
    {
      question: "Can Keesa actually help me save or earn more?",
      answer:
        "Yes. By understanding your habits, Keesa recommends smarter credit cards, personal loans, and spending nudges — tailored to your real usage."
    },
    {
      question: "How much setup does it need?",
      answer:
        "Almost none. Install. Grant SMS access. Done. Keesa starts making sense of your money instantly — no forms, no linking, no friction."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white text-center mb-12">
          Still curious?
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
