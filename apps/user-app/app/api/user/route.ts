import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return NextResponse.json({ user: session.user });
  } else {
    return NextResponse.json({
      error: "User not authorized",
      status: 403,
    });
  }
};
