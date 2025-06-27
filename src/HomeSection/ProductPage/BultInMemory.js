import React from "react";

export default function BuiltInMemory() {
  return (
    <div className="BuiltInMemory Section">
      <div className="Title BuiltInMemoryTitle">
        <h3>Built-in Memory</h3>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <hr />
      <form>
        <i class="fa-solid fa-magnifying-glass SearchIcon"></i>
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
    </div>
  );
}
