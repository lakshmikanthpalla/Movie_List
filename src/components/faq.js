import React, { useState } from 'react';
import './Movies.css'; // Import Movies.css for styling

const faqs = [
  {
    question: "How do I search for movies?",
    answer: "Use the search bar at the top of the page to enter a movie title or keyword. You can also click on the tabs (e.g., Marvel, Funny) to filter movies by category."
  },
  {
    question: "What does the favorite icon do?",
    answer: "Clicking the heart icon on a movie card adds it to your favorites. The heart turns red when a movie is favorited, and grey when it is not."
  },
  {
    question: "Why are only 10 movies shown at first?",
    answer: "To improve performance and readability, we initially display 10 movies. Click the 'Show More' button to view additional movies, and 'Show Less' to revert to the initial 10."
  },
  {
    question: "Can I see more details about a movie?",
    answer: "Currently, the movie cards show the title, type, year, and rating. We're working on adding more details in future updates!"
  },
  {
    question: "How accurate are the movie ratings?",
    answer: "The ratings are sourced from the OMDB API, which pulls data from IMDb. They are generally accurate but may vary slightly depending on the source data."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open state
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className="faq-toggle-icon">
                {openIndex === index ? '×' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;