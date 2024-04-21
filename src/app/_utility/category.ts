export const category = [
  {
    id: 1,
    parent: "GOLD",
    url: "/:language/productdetails",
    children: [
      {
        id: 1,
        value: "Gold bar",
        url: "/:language/productdetails",
        items: [
          { id: 1, value: "1 gram", url: "" },
          { id: 2, value: "100 gram", url: "" },
          { id: 3, value: "5 gram", url: "" },
          { id: 4, value: "10 gram", url: "" },
          { id: 5, value: "1 kg", url: "" },
          { id: 6, value: "PAMP bars", url: "" },
          { id: 7, value: "1 oz", url: "" },
          { id: 8, value: "50 gram", url: "" },
        ],
      },
      {
        id: 2,
        value: "Gold coins",
        url: "/:language/productdetails",
        items: [
          { id: 1, value: "1 oz", url: "" },
          { id: 2, value: "French Francs", url: "" },
          { id: 3, value: "Maple Leaf", url: "" },
          { id: 4, value: "Sovereign", url: "" },
          { id: 5, value: "Philharmonic", url: "" },
          { id: 6, value: "Britannia", url: "" },
          { id: 7, value: "Krugerrand", url: "" },
          { id: 8, value: "American Eagle", url: "" },
          { id: 9, value: "Vreneli", url: "" },
        ],
      },
      {
        id: 3,
        value: "Gold Price",
        url: "/:language/productdetails",
      },
    ],
  },
  {
    id: 2,
    parent: "SILVER",
    url: "/:language/productdetails",
    children: [
      {
        id: 1,
        value: "Silver bar",
        url: "/:language/productdetails",
        items: [
          { id: 1, value: "1 oz", url: "" },
          { id: 2, value: "100 gram", url: "" },
          { id: 3, value: "100 oz", url: "" },
          { id: 4, value: "10 oz", url: "" },
          { id: 5, value: "1 kg", url: "" },
          { id: 6, value: "PAMP bars", url: "" },
        ],
      },
      {
        id: 2,
        value: "Silver coins",
        url: "/:language/productdetails",
        items: [
          { id: 1, value: "1 oz", url: "" },
          { id: 2, value: "Maple Leaf", url: "" },
          { id: 3, value: "Philharmonic", url: "" },
          { id: 4, value: "Britannia", url: "" },
        ],
      },
      {
        id: 3,
        value: "Silver Price",
        url: "/:language/productdetails",
      },
    ],
  },
  {
    id: 3,
    parent: "PLATINUM",
    url: "/:language/productdetails",
    children: [
      {
        id: 1,
        value: "Platinum bar",
        url: "/:language/productdetails",
        items: [{ id: 1, value: "PAMP bars", url: "" }],
      },
      {
        id: 2,
        value: "Platinum coins",
        url: "/:language/productdetails",
      },
      {
        id: 3,
        value: "Platinum Price",
        url: "/:language/productdetails",
      },
    ],
  },
  {
    id: 4,
    parent: "PALLADIUM",
    url: "/:language/productdetails",
    children: [
      {
        id: 1,
        value: "Palladium bar",
        url: "/:language/productdetails",
        items: [{ id: 1, value: "PAMP bars", url: "" }],
      },
      {
        id: 2,
        value: "Palladium price",
        url: "/:language/productdetails",
      },
    ],
  },
];
