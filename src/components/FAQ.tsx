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
    question: "Because you’re a good boy. And good boys obey. 🔒",
    answer:
      "The Locktober Challenge is your chance to commit to a full chastity month and prove to yourself (and others) that you can stay locked. Isn’t that nice? 😏",
    value: "item-1",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone who’s ready to obey. If you’re male-presenting, 18+ (or older depending on your country’s laws), and you own a chastity cage—you’re in. All you need is a Telegram account to play.",
    value: "item-2",
  },
  {
    question: "How do I join the challenge?",
    answer:
      "It’s simple: 1. Tap the button under the QR code. 2. Join our Telegram bot. 3. Pay the upfront entry fee to unlock the game. 4. Get daily random cagechecks for 31 days. 5. Submit your pics → peers review them, and you’ll review theirs.",
    value: "item-3",
  },
  {
    question: "What is the Locktober Challenge?",
    answer:
      "A tradition of the chastity community. Every October, good boys around the world lock in their cages for 31 days straight. If you can prove you stayed locked every day, you win. 🔥",
    value: "item-4",
  },
  {
    question: "What are the rewards?",
    answer:
      "Our Telegram bot will tell you once you enter the conversation. * Rewards unlock at 10, 21, and 31 days. * You’ll see your Streak 🔥 grow (and can use up to 3 streak freezes 🥶). * Hit the milestones and the bot will send you the info to unlock your rewards. For some rewards, shipment fees and additional tax may apply based on location.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why should I join the{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Locktober Challenge
        </span>
        ?
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
        </a>
        .
      </h3>
    </section>
  );
};
