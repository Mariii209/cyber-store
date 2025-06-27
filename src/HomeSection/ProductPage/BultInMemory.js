import React from "react";
import ToggleSection from "./ToggleSection";

export default function BuiltInMemory() {
  return (
    <ToggleSection title="Built-in Memory">
      <form>
        <i className="fa-solid fa-magnifying-glass SearchIcon"></i>
        <input type="search" placeholder="Search memory..." />
      </form>

      <div className="BuiltInMemoryList">
        <ul>
          <li>
            <input type="checkbox" id="less-than-32GB" />
            <label htmlFor="less-than-32GB">Less than 32GB</label>
          </li>
          <li>
            <input type="checkbox" id="32GB-64GB" />
            <label htmlFor="32GB-64GB">32GB - 64GB</label>
          </li>
          <li>
            <input type="checkbox" id="64GB-128GB" />
            <label htmlFor="64GB-128GB">64GB - 128GB</label>
          </li>
          <li>
            <input type="checkbox" id="128GB-256GB" />
            <label htmlFor="128GB-256GB">128GB - 256GB</label>
          </li>
          <li>
            <input type="checkbox" id="more-than-256GB" />
            <label htmlFor="more-than-256GB">More than 256GB</label>
          </li>
        </ul>
      </div>
    </ToggleSection>
  );
}
