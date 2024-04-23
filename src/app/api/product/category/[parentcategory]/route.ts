import { prisma } from "../../../../../config";

export async function GET(
  request: Request,
  { params }: { params: { parentcategory: any } }
) {
  const { parentcategory } = params;
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));
  const skip = (page - 1) * limit;

  try {
    const data = await prisma.product.findMany({
      where: {
        OR: [
          { parentcategory: { contains: parentcategory.toUpperCase() } },
          { childcategory: { contains: parentcategory } },
          { subcategory: { contains: parentcategory } },
        ],
      },
      skip: skip,
      take: limit,
    });

    return Response.json({ data: data });
  } catch (error) {
    console.error("Error fetching product:", error);
    return Response.json({ success: false, error: "Error fetching product" });
  }
}
