import { prisma } from "../../../../config";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, password } = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      return Response.json({
        success: false,
        error: "User already exist, please try with a different email",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      const data = await prisma.user.create({
        data: {
          firstname,
          lastname,
          email,
          password: hashedPassword,
        },
      });

      return Response.json({ success: true, data: data });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ success: false, error: "Error creating user" });
  }
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
