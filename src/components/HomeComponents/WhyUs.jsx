import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function WhyUs() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index)); // Toggle behavior
  };

  return (
    <section id="WhyUsSection" ref={ref}>
      {inView && (
        <>
          <div className="flex flex-col px-8 bg-black py-20 text-white  lg:flex-row lg:justify-center lg:items-center">
            <div className="WhyUs mb-6 lg:w-1/2   animate-fade-right lg:flex lg:justify-center ">
              <div>
                <h2 className="text-4xl font-bold text-center ">WHY US?</h2>
              </div>
            </div>
            <div
              id="Accordion"
              className="mt-4 lg:w-1/2 animate-fade-left lg:border-l-white lg:border-l-4 lg:px-8 lg:py-4"
            >
              {/* Accordion Item 1 */}
              <div
                className={`collapse collapse-arrow bg-base-200 ${
                  openAccordion === 1 ? "collapse-open" : "collapse-close"
                }`}
                onClick={() => handleAccordionClick(1)}
              >
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>Content for accordion 1</p>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div
                className={`collapse mt-2 collapse-arrow bg-base-200 ${
                  openAccordion === 2 ? "collapse-open" : "collapse-close"
                }`}
                onClick={() => handleAccordionClick(2)}
              >
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>Content for accordion 2</p>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div
                className={`collapse mt-2 collapse-arrow bg-base-200 ${
                  openAccordion === 3 ? "collapse-open" : "collapse-close"
                }`}
                onClick={() => handleAccordionClick(3)}
              >
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>Content for accordion 3</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
