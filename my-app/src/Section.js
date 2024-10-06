import React from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";

function Section({ children, imageSrc, title, id }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the section is in view
  });

  return (
    <div className="section-container">
      <img src={imageSrc} alt="Section" />
      <section
        id={id}
        ref={ref}
        className={`section ${inView ? "fade-in" : ""}`}
      >
        <div className="section-content">
          <h1>{title}</h1>
          {children}
        </div>
      </section>
    </div>
  );
}

export default Section;
