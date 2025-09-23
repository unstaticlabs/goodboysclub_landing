import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do I join the challenge?",
    answer:
      "Simply tap the button underneath the QR code to join the challenge.",
    value: "item-1",
  },
  {
    question: "What is the challenge?",
    answer:
      'The challenge is to send a picture when we send you a "cagecheck" message.',
    value: "item-2",
  },
  {
    question: "What is the reward?",
    answer:
      "There are several rewards, depending on how good a boy you are. There will be Streaks 🔥 and (streak freezes 🥶). Rewards are at 10 days, 20 days and 31 days.",
    value: "item-3",
  },
  {
    question: "How do I get the reward?",
    answer:
      "Once you reach the reward day, you will receive a message with the reward.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://t.me/goodboysobey_bot?start"
          target="_blank"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us on telegram
        </a>.
      </h3>
    </section>
  );
};
