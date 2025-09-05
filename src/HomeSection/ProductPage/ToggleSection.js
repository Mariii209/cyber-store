import React, { useState } from "react";
import "./ToggleSection.css";

export default function ToggleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Section">
      <div className="Title" onClick={toggle}>
        <h3>{title}</h3>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
        ></i>
      </div>
      <hr />
      {isOpen && <div>{children}</div>}
    </div>
  );
}
