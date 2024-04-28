import { prisma } from "../../../config";

export async function POST(request: Request) {
  try {
    const { userId, file, desc } = await request.json();

    const payment = await prisma.payment.create({
      data: {
        userId,
        file,
        desc,
      },
    });

    return Response.json({ success: true, data: payment });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ success: false, error: "Error creating user" });
  }
}
