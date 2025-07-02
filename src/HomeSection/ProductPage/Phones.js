import React from "react";
import { iphone14Series } from "../../ProductData/Phones/Apple/Iphone14";
import ProductCard from "./ProductCard";
import "./Phones.css";

export default function Phones() {
  const selectedIDs = ["iphone-14", "iphone-14-pro-max"];
  const filteredPhones = iphone14Series.filter((phone) =>
    selectedIDs.includes(phone.id)
  );

  return (
    <div className="Phones">
      <div className="ProductToolbar">
        <div className="ProductToolbarInfo">
          <p>Selected Product:</p>
          <span>85</span>
        </div>
        <div className="SelectWrapper">
          <i className="fa-solid fa-chevron-down"></i>
          <select>
            <option>By rating</option>
            <option>By price</option>
            <option>By popularity</option>
          </select>
        </div>
      </div>

      <div className="PhoneContainer">
        {filteredPhones.map((phone) => (
          <ProductCard
            key={phone.id}
            image={phone.colors[0].image}
            title={`${phone.name} ${phone.memoryOptions[0].size}`}
            price={phone.memoryOptions[0].price}
          />
        ))}
      </div>
    </div>
  );
}
