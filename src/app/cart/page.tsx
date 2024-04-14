"use client";

import Image from "next/image";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { FavoriteBorder } from "@mui/icons-material";

const page = () => {
  return (
    <div>
      <p>Cart</p>
      <div>
        <h1>2 product(s) in your cart</h1>
        <button>Shop again</button>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-[70%]">
          <p>Your order</p>
          <div>
            {[1, 1].map((item) => (
             <div className="border-t">
                 <div className="flex justify-between">
                <div className="flex gap-2">
                  <Image src="" alt="dp" />
                  <p>1 ounce Gold Bar - Lady Fortuna 45th Anniversary</p>
                </div>
                <div className="flex gap-3">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <div>
                  <p>€2,353.21</p>
                </div>
                <div>
                  <DeleteOutlinedIcon />
                </div>
              </div>
              <div className="flex">
                <FavoriteBorder/>
                <p>Add to wishlist</p>
              </div>
             </div>
            ))}
          </div>
          <div>
            <div>
              <p>Payment method</p>
              <p>Sign in to select a payment method</p>
              <div>
                <input type="checkbox" />
                <p>Bank transfer</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Bitcoin</p>
              </div>
            </div>
            <div>
              <p>Storage & Delivery</p>
              <div>
                <div>
                  <div />
                </div>
                <div>
                  <p>Insured Storage</p>
                  <p>Estimated storage fees: FREE</p>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                <div>
                  <p>Shipping Delivery details</p>
                  <p>4-15 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <p>Order summary</p>
          <div>
            <p>Products (2)</p>
            <p>€2,803.70</p>
          </div>
          <hr />
          <div>
            <div>
              <p>Total</p>
              <p>€2,803.70</p>
            </div>
            <p>Incl. taxes</p>
          </div>
          <button>Sign in to continue</button>
          <p>
            First time on WARET GOLD? <span>Open an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
