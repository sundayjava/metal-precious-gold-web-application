import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../config";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await prisma.product.findMany({
      include: {
        imageUrl: true,
      },
    });

    const formattedData = data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      discount: product.discount,
      percent: product.percent,
      sku: product.sku,
      productYear: product.productYear,
      quantity: product.quantity,
      parentcategory: product.parentcategory,
      childcategory: product.childcategory,
      subcategory: product.subcategory,
      overview: product.overview,
      mintmark: product.mintmark,
      thickness: product.thickness,
      purity: product.purity,
      weight: product.weight,
      weightoz: product.weightoz,
      diameter: product.diameter,
      length: product.length,
      width: product.width,
      history: product.history,
      imageUrl: product.imageUrl.map((image) => image.url), // Extract the image URLs
    }));

    return Response.json(formattedData);
  } catch (error) {
    console.error("Error fetching product:", error);
    return Response.json({ success: false, error: "Error fetching product" });
  }
}
