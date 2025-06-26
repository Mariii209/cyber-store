import React from "react";

export default function ProtectionClass() {
  return (
    <div className="ProtectionClass">
      <h3>Protection Class</h3>
      <i className="fa-solid fa-chevron-up"></i>
      <hr />
      <form>
        <input type="search" name="" id="" placeholder="Search protection..." />
      </form>
      <div className="ProtectionClassList">
        <ul>
          <li>IP67</li>
          <li>IP68</li>
          <li>IP69K</li>
          <li>Military Standard (MIL-STD-810G)</li>
        </ul>
      </div>
    </div>
  );
}
