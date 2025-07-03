import React from "react";

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <div>Showing details for product ID: {id}</div>
    </div>
  );
}
