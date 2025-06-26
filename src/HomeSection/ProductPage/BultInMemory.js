import React from "react";

export default function BuiltInMemory() {
  return (
    <div className="BuiltInMemory">
      <h3>Built-in Memory</h3>
      <i className="fa-solid fa-chevron-up"></i>
      <hr />
      <form>
        <input type="search" placeholder="Search memory..." />
      </form>
      <div className="BuiltInMemoryList">
        <ul>
          <li>Less than 32GB</li>
          <li>32GB - 64GB</li>
          <li>64GB - 128GB</li>
          <li>128GB - 256GB</li>
          <li>More than 256GB</li>
        </ul>
      </div>
    </div>
  );
}
