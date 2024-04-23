import { prisma } from "../../../../config";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        userId: params.userId,
      },
      include: {
        cartItems: true,
      },
    });

    if (!cart) {
      throw new Error("Cart not found");
    }

    const totalItem = cart.cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const totalPrice = cart.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    const totalDiscountedPrice = cart.cartItems.reduce(
      (acc, item) => (item.discountedPrice ? acc + item.discountedPrice : acc),
      0
    );
    const discount = totalPrice - totalDiscountedPrice;

    const updatedCart = await prisma.cart.update({
      where: {
        id: cart.id,
      },
      include: {
        cartItems: {
          include: {
            product: true,
          },
        },
      },
      data: {
        totalItem,
        totalPrice,
        discount: totalDiscountedPrice,
        percent: discount,
      },
    });

    return Response.json({ success: true, data: updatedCart });
  } catch (error) {
    console.error("Item not found:", error);
    return Response.json({ success: false, error: "Item not found" });
  }
}
