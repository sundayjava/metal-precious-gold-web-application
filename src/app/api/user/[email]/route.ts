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

export async function PUT(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const {
      phoneNumber,
      address,
      street,
      streetNumber,
      shippingAddress,
      door,
      postalcode,
      city,
      country,
      currency,
      btcAddress,
      accountNumber,
      acccountry,
      swift,
      accName,
      otherInfo,
      refNumber,
      balance
    } = await request.json();

    const user = await prisma.user.findFirst({
      where: { email: params.email },
    });

    const updatedUser = await prisma.user.update({
      where: { id: user?.id },
      data: {
        phoneNumber,
        shippingAddress,
        address,
        street,
        streetNumber,
        door,
        postalcode,
        city,
        country,
        currency,
        btcAddress,
        accountNumber,
        acccountry,
        swift,
        accName,
        otherInfo,
        refNumber,
        balance
      },
    });
    console.log("User updated:", updatedUser);
    return Response.json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("No user found: ", error);
    return Response.json({ success: false, error: "No user found: " });
  }
}
