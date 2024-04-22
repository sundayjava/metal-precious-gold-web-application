import { prisma } from "../../../../config";

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, password } = await request.json();


      const data = await prisma.user.create({
        data: {
          firstname,
          lastname,
          email
        },
      });

      return Response.json({ success: true, data: data });
  
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
