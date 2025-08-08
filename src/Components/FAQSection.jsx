import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "Do I need a reservation?",
    a: "Yes. Seating is limited and prepared fresh daily—please reserve in advance to guarantee a table.",
  },
  {
    q: "What are your seating times?",
    a: "We offer seatings on Saturday and Sunday at 1:00 PM and 3:00 PM.",
  },
  {
    q: "Do you have gluten-free options?",
    a: "Yes  we have a gluten free option. We just need advance notice of an allergy to be prepared.",
  },
  {
    q: "Is the tea room kid-friendly?",
    a: "yes, we are child friendly. However, afternoon tea is a set menu. We do not offer a children's menu. We recommend age 6 and up for afternoon tea. We do not offer high chairs or booster seats. A child under the age of 3 would be required to sit in an adult lap.",
  },
  {
    q: "Where are you located?",
    a: "218 Valley Ct, Smyrna, TN 37167. See the ‘Location & Hours’ section for a map and parking details.",
  },
  {
    q: "How long does tea last?",
    a: "60 to 90 minutes. We want you to relax and enjoy your visit!",
  },
  {
    q: "Can I purchase items from the tray to take home?",
    a: "We do not offer 'extras' for purchase, but you may take any items you do not finish.",
  },
  {
    q: "Do you allow animals?",
    a: "The health department does not allow us to have animals inside a food service area.",
  },
  {
    q: "Do you offer outdoor seating?",
    a: "Not at this time.",
  },
  {
    q: "Can we rent the whole place for a party?",
    a: "Yes! We love parties! Email events@misspollystearoom.com for information.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle, idx }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold">{q}</span>
        <FiChevronDown
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`faq-panel-${idx}`}
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pb-4 text-slate-700">{a}</div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [open, setOpen] = useState({}); // {0:true, 2:true} etc.

  const toggle = (i) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section
      id="faqs"
      className="bg-[#faf3e0] py-16 scroll-mt-[70px]"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="uppercase tracking-widest text-2xl text-center pb-6">
          frequently asked questions
        </h2>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <FAQItem
                q={<span itemProp="name">{item.q}</span>}
                a={
                  <span
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{item.a}</span>
                  </span>
                }
                isOpen={!!open[i]}
                onToggle={() => toggle(i)}
                idx={i}
              />
            </div>
          ))}
        </div>

        {/* Optional CTA under FAQs */}
        <div className="text-center mt-8">
          <a
            href="https://miss-pollys.resos.com/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto bg-[#d6e4c2] text-sm md:text-lg text-black uppercase py-3 my-2 px-4 rounded-md font-semibold tracking-widest inline-block text-center"
          >
            RESERVE NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
