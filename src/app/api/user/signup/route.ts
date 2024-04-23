import { User } from "@/app/_utility/user";
import { prisma } from "../../../../config";

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email } = await request.json();

    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
      },
    });

    const cart = await createCart(user);

    return Response.json({ success: true, data: { user, cart } });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ success: false, error: "Error creating user" });
  }
}

async function createCart(user: User) {
  const cart = await prisma.cart.create({
    data: {
      user: { connect: { id: user.id } },
    },
  });
  return cart;
}

export async function GET(request: Request) {
  try {
    const result = await prisma.user.findMany();

    return Response.json(result);
  } catch (error) {
    console.error("No user found: ", error);
    return Response.json({ success: false, error: "No user found: " });
  }
}
