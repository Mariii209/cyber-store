import React from "react";
import ToggleSection from "./ToggleSection";

export default function ProtectionClass() {
  return (
    <ToggleSection title="Protection Class">
      <form>
        <i className="fa-solid fa-magnifying-glass SearchIcon"></i>
        <input type="search" placeholder="Search protection..." />
      </form>

      <div className="ProtectionClassList">
        <ul>
          <li>
            <input type="checkbox" id="IP20" />
            <label htmlFor="IP20">IP20</label>
          </li>
          <li>
            <input type="checkbox" id="IP54" />
            <label htmlFor="IP54">IP54</label>
          </li>
          <li>
            <input type="checkbox" id="IP55" />
            <label htmlFor="IP55">IP55</label>
          </li>
          <li>
            <input type="checkbox" id="IP56" />
            <label htmlFor="IP56">IP56</label>
          </li>
          <li>
            <input type="checkbox" id="IP67" />
            <label htmlFor="IP67">IP67</label>
          </li>
          <li>
            <input type="checkbox" id="IP68" />
            <label htmlFor="IP68">IP68</label>
          </li>
          <li>
            <input type="checkbox" id="IP69K" />
            <label htmlFor="IP69K">IP69K</label>
          </li>
          <li>
            <input type="checkbox" id="MIL-STD-810G" />
            <label htmlFor="MIL-STD-810G">
              Military Standard (MIL-STD-810G)
            </label>
          </li>
        </ul>
      </div>
    </ToggleSection>
  );
}
