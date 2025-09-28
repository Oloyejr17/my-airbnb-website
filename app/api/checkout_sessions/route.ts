import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CheckoutRequestBody {
  type: "listing" | "experience" | "service";
  id: number | string;
  checkIn?: string;
  checkOut?: string;
  guests?: number | string;
  totalPrice: number | string;
}

export async function POST(req: Request) {
  try {
    const body: CheckoutRequestBody = await req.json();
    const { type, id, checkIn, checkOut, guests, totalPrice } = body;

    // validate base fields
    if (!type || !id || !totalPrice) {
      return NextResponse.json(
        { error: "Missing required booking details" },
        { status: 400 }
      );
    }

    // create product description based on type
    let description = "";
    if (type === "listing") {
      if (!checkIn || !checkOut || !guests) {
        return NextResponse.json(
          { error: "Missing check-in/out or guests for listing booking" },
          { status: 400 }
        );
      }
      description = `Check-in: ${checkIn} | Check-out: ${checkOut} | Guests: ${guests}`;
    } else if (type === "experience") {
      description = "Experience booking";
    } else if (type === "service") {
      description = "Service booking";
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name:
                type === "listing"
                  ? `Stay #${id}`
                  : type === "experience"
                  ? `Experience #${id}`
                  : `Service #${id}`,
              description,
            },
            unit_amount: Math.round(Number(totalPrice) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get(
        "origin"
      )}/bookings/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout?type=${type}&id=${id}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
