import React, { useEffect, useRef } from "react";
import SliderCard from "./SliderCard";
import Button from "../Button";

export default function ActionSlider({ isOpen, closeSidebar, items, btn }) {
  const sliderRef = useRef(null);

  // Close the sidebar if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sliderRef.current &&
        !sliderRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <div
      ref={sliderRef}
      className={`fixed left-0 top-0 z-10 h-full transform bg-gray-800 bg-opacity-90 text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-[30%]`}
    >
      <div className="flex flex-col gap-4 p-3">
        <Button
          onClick={closeSidebar}
          className="w-full bg-gray-700 px-4 py-2 text-lg hover:bg-gray-600"
        >
          Close &times;
        </Button>

        <nav className="flex flex-col items-center space-y-2">
          {items.length > 0 ? (
            items.map((item) => (
              <SliderCard key={item.id} selectedProduct={item} btn={btn} />
            ))
          ) : (
            <p>No items available</p>
          )}
        </nav>
      </div>
    </div>
  );
}
