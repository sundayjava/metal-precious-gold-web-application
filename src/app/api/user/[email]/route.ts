import { prisma } from "../../../../config";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const data = await prisma.user.findFirst({
      where: {
        email: params.email,
      },
    });

    return Response.json(data);
  } catch (error) {
    console.error("No user found: ", error);
    return Response.json({ success: false, error: "No user found: " });
  }
}
