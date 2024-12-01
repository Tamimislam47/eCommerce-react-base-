import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data.js";

export default function ClientFeedback() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => setIndex(index + 1), 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="w-screen bg-[#F2F8FD] mt-[2rem] ">
      <section className="section from-blue-100 to-blue-100 w-screen pt-6 bg-gradient-to-r">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800">
            Cient Feedback
          </h1>
        </div>
        <div className="section-center relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "translate-x-full opacity-0";
            if (personIndex === index) {
              position = "translate-x-0 opacity-100";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "-translate-x-full opacity-0";
            }
            return (
              <article
                key={id}
                className={`absolute transition-transform  duration-500 ease-in-out ${position} w-full p-8 text-center`}
              >
                <img
                  src={image}
                  alt={name}
                  className="mx-auto h-32 w-32 rounded-full shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
                <p className="text-sm text-gray-600">{title}</p>
                <p className="mt-4 italic text-gray-700">{quote}</p>
                <FaQuoteRight className="text-blue-500 mx-auto mt-4 text-3xl" />
              </article>
            );
          })}
          <button
            className="text-blue-500 hover:text-blue-700 absolute left-5 top-1/2 -translate-y-1/2 transform text-3xl"
            onClick={() => setIndex(index - 1)}
          >
            <FiChevronLeft />
          </button>
          <button
            className="text-blue-500 hover:text-blue-700 absolute right-5 top-1/2 -translate-y-1/2 transform text-3xl"
            onClick={() => setIndex(index + 1)}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}
