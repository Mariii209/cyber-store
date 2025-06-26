import React from "react";
import Brand from "./Brand";
import BatteryCapacity from "./BatteryCapacity";
import ScreenType from "./ScreenType";
import ScreenDiagonal from "./ScreenDiagonal";
import ProtectionClass from "./ProtectionClass";
import BuiltInMemory from "./BultInMemory";
import "./SideFilter.css";

export default function SideFilter() {
  return (
    <div className="SideFilter">
      <Brand />
      <BatteryCapacity />
      <ScreenType />
      <ScreenDiagonal />
      <ProtectionClass />
      <BuiltInMemory />
    </div>
  );
}
