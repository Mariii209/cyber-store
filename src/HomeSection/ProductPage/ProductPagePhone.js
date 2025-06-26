import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import Brand from "./Brand";
import BatteryCapacity from "./BatteryCapacity";
import ScreenType from "./ScreenType";
import ScreenDiagonal from "./ScreenDiagonal";
import ProtectionClass from "./ProtectionClass";
import BuiltInMemory from "./BultInMemory";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div>
      <NavBar />
      <ul>
        <li>Home</li>
        <li> Catalog</li>
        <li>{category}</li>
      </ul>
      <dic className="Content">
        <Brand />
        <BatteryCapacity />
        <ScreenType />
        <ScreenDiagonal />
        <ProtectionClass />
        <BuiltInMemory />
      </dic>
    </div>
  );
}
