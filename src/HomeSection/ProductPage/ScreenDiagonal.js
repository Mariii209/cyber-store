import React from "react";

export default function ScreenDiagonal() {
  return (
    <div className="ScreenDiagonal">
      <h3>Screen Diagonal</h3>
      <i className="fa-solid fa-chevron-up"></i>
      <hr />
      <form>
        <input type="search" name="" id="" placeholder="Search diagonal..." />
      </form>
      <div className="ScreenDiagonalList">
        <ul>
          <li>Less than 5 inches</li>
          <li>5 - 6 inches</li>
          <li>6 - 7 inches</li>
          <li>More than 7 inches</li>
        </ul>
      </div>
    </div>
  );
}
