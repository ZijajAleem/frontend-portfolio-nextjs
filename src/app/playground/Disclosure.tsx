"use client";

import { useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="skills-content"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▼" : "▶"} What skills do I have?
      </button>

      {isOpen && (
        <div id="skills-content">
          <p>I know HTML, CSS, JavaScript and React.</p>
        </div>
      )}
    </div>
  );
}