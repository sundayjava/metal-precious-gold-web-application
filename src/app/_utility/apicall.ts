import axios from "axios";
import { User } from "./user";

export const addToCart = async (
  email: any,
  productId: string,
  setCartData?: any
) => {
  if (email) {
    try {
      const response = await axios.get<User>(`/api/user/${email}`);

      if (!response.data.id) {
        alert("Please login to add item to cart");
        return;
      }

      const addTocart = await fetch("/api/cart/addcartitem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: response.data.id,
          productId: productId,
        }),
      });

      const data = await addTocart.json();
      if (data.success === true) {
        alert("Item added to cart");
        getCartItem(email, setCartData);
      } else {
        alert("Data already exist. please confirm");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  } else {
    alert("Please sign in to continue");
  }
};

export const getCartItem = async (email: any, setCartData: any) => {
  try {
    const response = await axios.get<User>(`/api/user/${email}`);
    const cartRes = await axios.get<CartData>(`/api/cart/${response.data.id}`);
    setCartData(cartRes.data);
  } catch (error) {
    console.error("Error fetching cart item data:", error);
  }
};

export interface Product {
  id: string;
  title: string;
  price: number;
  discount: number;
  sku: string;
  productYear: string;
  percent: number;
  quantity: number;
  parentcategory: string;
  childcategory: string;
  subcategory: string;
  overview: string;
  mintmark: string;
  thickness: number;
  purity: string;
  weight: number;
  weightoz: number;
  diameter: number;
  length: number;
  width: number;
  history: string;
  imageUrl: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  price: number;
  discountedPrice: number;
  userId: string;
  product: Product;
}

export interface CartData {
  success: boolean;
  data: {
    id: string;
    userId: string;
    totalPrice: number;
    totalItem: number;
    discount: number;
    percent: number;
    cartItems: CartItem[];
  };
}
