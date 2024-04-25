import { prisma } from "../../../config";

export async function DELETE(
    request: Request
  ) {
    const {cartId} = await request.json()

    try {
      if (!cartId) {
        throw new Error("Cart ID is required.");
      }
  
      const deletedCartItems = await prisma.cartItem.deleteMany({
        where: {
          cartId:cartId
        },
      });
  
      return Response.json({
        success: true,
        message: "Cart items deleted successfully.",
        deletedCartItems
      });
    } catch (error) {
      console.error("Error deleting cart items:", error);
      return Response.json({
        success: false,
        error: "Error deleting cart items",
      });
    }
  }
  