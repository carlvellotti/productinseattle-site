import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // TODO: Replace with actual Beehiiv API call
    // const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
    // const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;
    //
    // const response = await fetch(
    //   `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${BEEHIIV_API_KEY}`,
    //     },
    //     body: JSON.stringify({
    //       email,
    //       reactivate_existing: true,
    //       send_welcome_email: true,
    //     }),
    //   }
    // );
    //
    // if (!response.ok) {
    //   throw new Error("Failed to subscribe");
    // }

    // For now, just return success
    // Remove this once Beehiiv integration is set up
    console.log(`New subscriber: ${email}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
