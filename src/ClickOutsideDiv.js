import React, { useEffect, useState, useRef } from "react";

export default function ClickOutsideDiv() {
  const [isOpen, setIsOpen] = useState(false);
  const refDrop = useRef(null);

  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  const openDropdown = () => setIsOpen(!isOpen);

  function closeDropdown(e) {
    if (refDrop.current.contains(e.target)) return; // click inside div

    setIsOpen(false); // click outside
  }

  return (
    <div ref={refDrop} className="popover-container">
      <button onClick={openDropdown}>
        {isOpen ? "Close" : "Open"} popover
      </button>
      {isOpen && (
        <div className={`popover ${isOpen ? "" : "popover--open"}`}>
          I'm a popover!
        </div>
      )}
    </div>
  );
}
