import { prisma } from "../../../config";

export async function POST(request: Request) {
  const { userId } = await request.json();

  try {
    const cart = await prisma.cart.findFirst({
      where: {
        userId: userId,
      },
      include: {
        cartItems: { include: { product: true } },
      },
    });

    if (!cart) {
      return Response.json({
        success: false,
        data: "Cart not found for the user",
      });
    }

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let discount = 0;
    let totalItem = 0;

    const orderItems = cart.cartItems.map((cartItem) => {
      const orderItem = {
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        price: cartItem.price,
        discountedPrice: cartItem.discountedPrice,
        userId: userId,
        deliveryDate: new Date(),
      };
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      discount += cartItem.price - cartItem.discountedPrice;
      totalItem += cartItem.quantity;
      return orderItem;
    });

    if (orderItems.length === 0) {
      return Response.json({
        success: false,
        data: "No items found in the cart to create an order",
      });
    }

    const createdOrder = await prisma.order.create({
      data: {
        userId: userId,
        orderItems: { createMany: { data: orderItems } },
        totalPrice: totalPrice,
        totalDiscountedPrice: totalDiscountedPrice,
        discount: discount,
        totalItem: totalItem,
        orderDate: new Date(),
        orderStatus: "PENDING",
      },
      include: {
        user: {
          include: {
            cart: {
              include: {
                cartItems: {
                  include: {
                    product: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return Response.json({ success: true, data: createdOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return Response.json({ success: false, error: "Error creating order" });
  }
}
