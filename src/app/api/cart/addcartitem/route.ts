import { prisma } from "../../../../config";

export async function POST(request: Request) {
  try {
    const { userid, productId } = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        id: userid,
      },
      include: {
        cart: true,
      },
    });

    console.log(user);

    const existedproduct = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    console.log(existedproduct);

    if (user && existedproduct) {
      const isCartAlreadyexist = await prisma.cartItem.findFirst({
        where: {
          productId: existedproduct.id,
          cartId: user.cart?.id,
        },
      });

      if (!isCartAlreadyexist) {
        const cartItem = await prisma.cartItem.create({
          data: {
            product: { connect: { id: existedproduct.id } },
            cart: { connect: { id: user.cart?.id } },
            quantity: 1,
            userId: userid,
            price: 1 * (existedproduct.price || 0),
            discountedPrice: 1 * (existedproduct.discount || 0),
          },
        });

        const updatecart = await prisma.cart.update({
          where: {
            id: user.cart?.id,
          },
          data: {
            cartItems: { connect: { id: cartItem.id } },
          },
        });

        return Response.json({ success: true, data: updatecart });
      } else {
        return Response.json({ success: false, data: "Item already exist" });
      }
    }
  } catch (error) {
    console.error("Error adding item:", error);
    return Response.json({ success: false, error: "Error adding item" });
  }
}

export async function PUT(request: Request) {
  try {
    const { cartitemid, userId, quantity } = await request.json();

    const cartitem = await prisma.cartItem.findUnique({
      where: {
        id: cartitemid,
      },
      include: {
        product: true,
      },
    });

    const user = await prisma.user.findFirst({
      where: { id: cartitem?.userId },
    });

    if (
      user?.id === userId &&
      cartitem &&
      cartitem.product &&
      cartitem.quantity !== undefined
    ) {
      const updatedcart = await prisma.cartItem.update({
        where: { id: cartitem.id },
        include: {
          product: true,
        },
        data: {
          quantity: quantity,
          price: cartitem.product.price ? quantity * cartitem.product.price : 0,
          discountedPrice: cartitem.product.discount
            ? quantity * cartitem.product.discount
            : 0,
        },
      });
      return Response.json({ success: true, data: updatedcart });
    }
  } catch (error) {
    console.error("Error updating item:", error);
    return Response.json({ success: false, error: "Error updating item" });
  }
}

export async function DELETE(request: Request) {
  try {
    const { cartitemid, userId } = await request.json();

    const cartitem = await prisma.cartItem.findUnique({
      where: {
        id: cartitemid,
      },
      include: {
        product: true,
      },
    });

    const user = await prisma.user.findUnique({
      where: { id: cartitem?.userId },
    });

    const reqUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user?.id === reqUser?.id) {
      await prisma.cartItem.delete({
        where: {
          id: cartitemid,
        },
        include: { product: true, cart: true },
      });
      return Response.json({ success: true, data: "Item deleted" });
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    return Response.json({ success: false, error: "Error deleting item" });
  }
}
