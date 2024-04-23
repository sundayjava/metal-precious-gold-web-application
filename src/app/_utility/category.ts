export const category = [
  {
    id: 'gold',
    parent: 'gold',
    url: '/:language/productdetails',
    children: [
      {
        id: 'gold-bar',
        value: 'Gold bar',
        url: '/:language/productdetails',
        items: [
          { id: 'gold-bar-1', value: '1 gram', url: '' },
          { id: 'gold-bar-2', value: '100 gram', url: '' },
          { id: 'gold-bar-3', value: '5 gram', url: '' },
          { id: 'gold-bar-4', value: '10 gram', url: '' },
          { id: 'gold-bar-5', value: '1 kg', url: '' },
          { id: 'gold-bar-6', value: 'PAMP bars', url: '' },
          { id: 'gold-bar-7', value: '1 oz', url: '' },
          { id: 'gold-bar-8', value: '50 gram', url: '' },
        ],
      },
      {
        id: 'gold-coins',
        value: 'Gold coins',
        url: '/:language/productdetails',
        items: [
          { id: 'gold-coins-1', value: '1 oz', url: '' },
          { id: 'gold-coins-2', value: 'French Francs', url: '' },
          { id: 'gold-coins-3', value: 'Maple Leaf', url: '' },
          { id: 'gold-coins-4', value: 'Sovereign', url: '' },
          { id: 'gold-coins-5', value: 'Philharmonic', url: '' },
          { id: 'gold-coins-6', value: 'Britannia', url: '' },
          { id: 'gold-coins-7', value: 'Krugerrand', url: '' },
          { id: 'gold-coins-8', value: 'American Eagle', url: '' },
          { id: 'gold-coins-9', value: 'Vreneli', url: '' },
        ],
      },
      {
        id: 'gold-price',
        value: 'Gold Price',
        url: '/:language/productdetails',
      },
    ],
  },
  {
    id: 'silver',
    parent: 'silver',
    url: '/:language/productdetails',
    children: [
      {
        id: 'silver-bar',
        value: 'Silver bar',
        url: '/:language/productdetails',
        items: [
          { id: 'silver-bar-1', value: '1 oz', url: '' },
          { id: 'silver-bar-2', value: '100 gram', url: '' },
          { id: 'silver-bar-3', value: '100 oz', url: '' },
          { id: 'silver-bar-4', value: '10 oz', url: '' },
          { id: 'silver-bar-5', value: '1 kg', url: '' },
          { id: 'silver-bar-6', value: 'PAMP bars', url: '' },
        ],
      },
      {
        id: 'silver-coins',
        value: 'Silver coins',
        url: '/:language/productdetails',
        items: [
          { id: 'silver-coins-1', value: '1 oz', url: '' },
          { id: 'silver-coins-2', value: 'Maple Leaf', url: '' },
          { id: 'silver-coins-3', value: 'Philharmonic', url: '' },
          { id: 'silver-coins-4', value: 'Britannia', url: '' },
        ],
      },
      {
        id: 'silver-price',
        value: 'Silver Price',
        url: '/:language/productdetails',
      },
    ],
  },
  {
    id: 'platinum',
    parent: 'platinum',
    url: '/:language/productdetails',
    children: [
      {
        id: 'platinum-bar',
        value: 'Platinum bar',
        url: '/:language/productdetails',
        items: [{ id: 'platinum-bar-1', value: 'PAMP bars', url: '' }],
      },
      {
        id: 'platinum-coins',
        value: 'Platinum coins',
        url: '/:language/productdetails',
      },
      {
        id: 'platinum-price',
        value: 'Platinum Price',
        url: '/:language/productdetails',
      },
    ],
  },
  {
    id: 'palladium',
    parent: 'palladium',
    url: '/:language/productdetails',
    children: [
      {
        id: 'palladium-bar',
        value: 'Palladium bar',
        url: '/:language/productdetails',
        items: [{ id: 'palladium-bar-1', value: 'PAMP bars', url: '' }],
      },
      {
        id: 'palladium-price',
        value: 'Palladium price',
        url: '/:language/productdetails',
      },
    ],
  },
];
