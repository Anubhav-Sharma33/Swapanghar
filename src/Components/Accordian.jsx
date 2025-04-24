import { useState } from "react";
import { ChevronDown } from "lucide-react";



export default function Accordion({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full flex-col gap-y-[10px]">
      {faqs.map((item, index) => (
        <div
          key={index}
          style={{
            background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
            boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
          }}
        >
          <button
            onClick={() => toggle(index)}
            className={`group w-full flex justify-between items-center p-4 text-left font-bold text-[1rem] ${
              openIndex === index
                ? "hover:text-[#116d42] text-[#2f2f2f]"
                : "text-[#2f2f2f]"
            }`}
          >
            <span>{`Q${index + 1}: ${item.question}`}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
            } text-[#2f2f2f] bg-white font-normal text-[1rem]`}
          >
            <p>
              <strong>Ans.</strong> {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
