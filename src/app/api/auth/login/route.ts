import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("✅ API /auth/login terpanggil:", body);

  return NextResponse.json({
    status: 200,
    message: "success",
    data: body,
  });
}
