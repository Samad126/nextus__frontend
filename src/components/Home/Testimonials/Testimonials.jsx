import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      description:
        "“I am proud to say that after a few months of taking this course I passed my exam and now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.”",
      user: "Will Amber",
      content: "(New) Ultimate AWS Certified Cloud Practitioner -2020",
      image: "",
    },
    {
      description:
        "“I am proud to say that after a few months of taking this course I passed my exam and now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.”",
      user: "Will Amber",
      content: "(New) Ultimate AWS Certified Cloud Practitioner -2020",
      image: "",
    },
    {
      description:
        "“I am proud to say that after a few months of taking this course I passed my exam and now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.”",
      user: "Will Amber",
      content: "(New) Ultimate AWS Certified Cloud Practitioner -2020",
      image: "",
    },
  ];

  return (
    <section id="testimonials">
      <div className="testimonials__container">
        <h1 className="testimonials__top">
          How learners like you achieve their goal
        </h1>
        <div className="testimonials__bottom">
          {testimonials.map((testimonial, item) => (
            <TestimonialCard key={item} testimonials={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
