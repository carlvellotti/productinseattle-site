import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, referralCode } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Missing Beehiiv configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "productinseattle.com",
          utm_medium: "website",
          ...(referralCode && { utm_campaign: referralCode }),
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Beehiiv API error:", errorData);

      // Already subscribed is still a success
      if (response.status === 409) {
        return NextResponse.json(
          { success: true, message: "You're already subscribed!" },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You're in! Check your inbox to confirm.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
