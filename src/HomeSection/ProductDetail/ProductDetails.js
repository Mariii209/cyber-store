import React from "react";
import NavBar from "./NavBar";

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return <div>Showing details for product ID: {id}</div>;
}
