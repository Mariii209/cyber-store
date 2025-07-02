import React from "react";

const productData = {
  year: "2021-2022",
  products: {
    phones: {
      brands: [
        "Apple",
        "Samsung",
        "Google",
        "OnePlus",
        "Xiaomi",
        "Motorola",
        "Nothing",
      ],
      Apple: {
        "iPhone 13 Series": [
          "iPhone 13 mini",
          "iPhone 13",
          "iPhone 13 Pro",
          "iPhone 13 Pro Max",
        ],
        "iPhone 14 Series": [
          "iPhone 14",
          "iPhone 14 Plus",
          "iPhone 14 Pro",
          "iPhone 14 Pro Max",
        ],
      },
    },
    smartwatch: {
      brands: ["Apple", "Samsung", "Google", "Garmin", "Fitbit", "Amazfit"],
    },
    cameras: {
      brands: ["Canon", "Sony", "Nikon", "Fujifilm", "Panasonic"],
    },
    headphones: {
      brands: ["Apple/Beats", "Sony", "Bose", "Sennheiser", "JBL"],
    },
    computers: {
      brands: ["Apple/Mac", "Dell", "HP", "Lenovo", "Asus"],
    },
    gaming: {
      brands: ["PS5", "Xbox", "Nintendo", "Steam Deck"],
    },
  },
};

export default productData;
