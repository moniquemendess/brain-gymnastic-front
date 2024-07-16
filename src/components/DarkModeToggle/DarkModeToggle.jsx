import React, { useEffect, useState } from "react";
import "./DarkModeToggle.css";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun as solidSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode;
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="darkModeToggle">
      <FontAwesomeIcon
        onClick={toggleDarkMode}
        icon={darkMode ? solidSun : solidMoon}
        style={{ color: darkMode ? "white" : "#122e3d" }}
        size="lg"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="dark mode/ light mode"
        data-tooltip-variant="success"
      />
      <Tooltip id="my-tooltip" />
    </div>
  );
};
