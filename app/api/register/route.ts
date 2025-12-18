import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const wpResponse = await fetch(
      "http://aips-backend.local/wp-json/secure/v1/register",
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.WP_USER}:${process.env.WP_APP_PASSWORD}`
            ).toString("base64"),
        },
        body: formData,
      }
    );

    const data = await wpResponse.json();

    if (!wpResponse.ok) {
      return NextResponse.json(
        { error: "Submission failed", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
  success: true,
  redirect: "/acknowledgment",
});

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
