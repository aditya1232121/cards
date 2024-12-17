import React, { useState, useEffect } from "react";
import "./App.css";

// Sample testimonials
const testimonials = [
  {
    id: 1,
    text: "Wiza helped our team scale 1:1 outreach for our ABM programs by providing an easy way to enrich contact data.",
    name: "Amber Stone",
    position: "Head of Enterprise ABM, UserTesting",
    metrics: { titleAccuracy: 18, emailAccuracy: 4, bounceRate: 50 },
  },
  {
    id: 2,
    text: "Wiza streamlined our process, cutting manual work and increasing data accuracy.",
    name: "John Doe",
    position: "Marketing Manager, TechSolutions",
    metrics: { titleAccuracy: 20, emailAccuracy: 5, bounceRate: 45 },
  },
  {
    id: 3,
    text: "Thanks to Wiza, we improved outreach efficiency and enhanced our ABM strategies.",
    name: "Jane Smith",
    position: "VP of Marketing, CloudInc",
    metrics: { titleAccuracy: 25, emailAccuracy: 6, bounceRate: 40 },
  },
  {
    id: 4,
    text: "Wiza has saved us so much time and improved our contact accuracy significantly.",
    name: "Michael Lee",
    position: "Director of Sales, GrowthTech",
    metrics: { titleAccuracy: 30, emailAccuracy: 8, bounceRate: 35 },
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next testimonial when the screen is clicked
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle the previous testimonial when the left arrow is clicked
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Function to handle click on the screen
  useEffect(() => {
    const handleScreenClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Add event listener to the document for screen clicks
    document.addEventListener("click", handleScreenClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleScreenClick);
    };
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="app">
      <div className="company-info">
        <h1>You are in good company</h1>
        <h6>You don't have to trust our word</h6>
      </div>

      <div className="card">
        <p className="testimonial">"{currentTestimonial.text}"</p>
        <div className="author">
          <h3>{currentTestimonial.name}</h3>
          <p>{currentTestimonial.position}</p>
        </div>
      </div>

      <div className="metrics">
  <span>
    <span className="percentage">{currentTestimonial.metrics.titleAccuracy}%</span>
    Title Accuracy
  </span>
  <span>
    <span className="percentage">{currentTestimonial.metrics.emailAccuracy}%</span>
    Email Accuracy
  </span>
  <span>
    <span className="percentage">{currentTestimonial.metrics.bounceRate}%</span>
    Bounce Rate
  </span>
</div>
      <div className="navigation">
        {/* Left Arrow Button */}
        <button
          className="left-arrow"
          onClick={(e) => {
            e.stopPropagation(); // Prevent screen click from triggering
            handlePrev(); // Go to the previous testimonial
          }}
        >
          ←
        </button>
        {/* Right Arrow Button */}
        <button
          className="right-arrow"
          onClick={(e) => {
            e.stopPropagation(); // Prevent screen click from triggering
            handleNext(); // Go to the next testimonial
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default App;
