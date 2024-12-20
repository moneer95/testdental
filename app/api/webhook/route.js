import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK);

export async function POST(req) {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    const rawBody = await req.text(); // Get raw request body
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret); // Verify event signature
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
  }

  if (event.type === "charge.succeeded") {
    const session = event.data.object; // Checkout Session object

    try {
      // Fetch line items using the session ID
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      console.log("Line Items:", lineItems.data);

      // Process line items here
      lineItems.data.forEach((item) => {
        console.log(`Item: ${item.description}, Quantity: ${item.quantity}, Price: ${item.price.unit_amount}`);
      });
    } catch (err) {
      console.error("Failed to fetch line items:", err.message);
      return NextResponse.json({ error: "Failed to fetch line items" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
