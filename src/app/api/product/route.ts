import { prisma } from "../../../config";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await prisma.product.findMany();


    return Response.json(data);
  } catch (error) {
    console.error("Error fetching product:", error);
    return Response.json({ success: false, error: "Error fetching product" });
  }
}
