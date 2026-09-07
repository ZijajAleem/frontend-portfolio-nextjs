"use client";

import { useState } from "react";

const tabs = [
  {
    id: "profile",
    label: "Profile",
    content: "This is the profile information.",
  },
  {
    id: "projects",
    label: "Projects",
    content: "These are my frontend projects.",
  },
  {
    id: "contact",
    label: "Contact",
    content: "You can contact me about an internship or project.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      setActiveTab(tabs[nextIndex].id);
    }
  };

  return (
    <div>
      <div role="tablist" aria-label="Portfolio sections">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${tab.id}-panel`}
          role="tabpanel"
          aria-labelledby={tab.id}
          hidden={activeTab !== tab.id}
        >
          <p>{tab.content}</p>
        </div>
      ))}
    </div>
  );
}