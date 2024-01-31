import React, { useState, useEffect } from "react";

const HorizontalList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (e.key === "ArrowRight" && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              border: index === currentIndex ? "2px solid #007bff" : "none",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalList;
