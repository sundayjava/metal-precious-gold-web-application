export const filters = [
    
    {
        id:"typeofmetal",
        name:"Type of metal",
        options:[
            {value:"gold", label:"Gold"},
            {value:"silver", label:"Silver"},
            {value:"platinum", label:"Platinum"},
            {value:"palladium", label:"Palladium"}
        ]
    },

    {
        id:"typeofproduct",
        name:"Type of product",
        options:[
            {value:"cast-bar", label:"Cast bar"},
            {value:"minted-bar", label:"Minted bar"},
            {value:"coins", label:"Coins"}
        ]
    },

    {
        id:"collections",
        name:"Collections",
        options:[
            {value:"pamp-cast-bars", label:"PAMP Cast Bars"},
            {value:"pamp-lady-fortuna", label:"PAMP Lady Fortuna"},
            {value:"pamp-rosa", label:"PAMP Rosa"},
            {value:"pamp-collections", label:"PAMP Collections"},
            {value:"lunar", label:"Lunar"},
            {value:"vreneli", label:"Vreneli"},
            {value:"maple-leaf", label:"Maple Leaf"},
            {value:"philharmonic", label:"Philharmonic"},
            {value:"krugerrand", label:"Krugerrand"},
            {value:"britannia", label:"Britannia"},
            {value:"american Eagle", label:"American Eagle"},
            {value:"kangaroo", label:"Kangaroo"},
            {value:"napoleon", label:"Napoleon"},
            {value:"crypto", label:"Crypto"},
        ]
    },

    {
        id:"priceperproduct",
        name:"Price per product",
        options:[
            {value:"0-500", label:"< €500.00"},
            {value:"500-1000", label:"€500.00 - €1,000.00"},
            {value:"1000-2000", label:"€1,000.00 - €2,000.00"},
            {value:"2000-5000", label:"€2,000.00 - €5,000.00"},
            {value:"5000-21474483647", label:"€5,000.00 - €œ"}
        ]
    },

    {
        id:"weight",
        name:"Weight",
        options:[
            {value:"1-10-oz-3-11-grams", label:"< 1/10 oz (3.11 grams)"},
            {value:"1-10-oz-3-11-grams", label:"1/10 oz (3.11 grams)"},
            {value:"5-grams", label:"5 grams"},
            {value:"6-grams-10-grams", label:"6 grams - 10 grams"},
            {value:"11-grams-30-grams", label:"11 grams - 30 grams"},
            {value:"1-oz-31-10-grams", label:"1 oz (31.10 grams)"},
            {value:"50-grams", label:"50 grams"},
            {value:"100-grams", label:"100 grams"},
            {value:"100-grams", label:"> 100 grams"},
        ]
    },

    {
        id:"brand",
        name:"Brand",
        options:[
            {value:"pamp-suisse", label:"PAMP Suisse"},
            {value:"royal-canadian-mint", label:"Royal Canadian Mint"},
            {value:"royal-mint", label:"Royal Mint"},
            {value:"swiss-mint", label:"Swiss Mint"},
            {value:"south-african-mint", label:"South African Mint"},
            {value:"austrian-mint", label:"Austrian Mint"},
            {value:"uS-mint", label:"US Mint"},
            {value:"royal-australian-mint", label:"Royal Australian Mint"},
            {value:"perth-mint", label:"Perth Mint"},
            {value:"monnaie-de-paris", label:"Monnaie de Paris"},
        ]
    },
   
];