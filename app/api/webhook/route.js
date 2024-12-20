import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK); // Your Stripe Secret Key
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Your Webhook Secret

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing to handle raw request body
  },
};

export async function POST(req) {
  const sig = req.headers.get("stripe-signature"); // Retrieve the Stripe signature header
  let event;

  try {
    const rawBody = await req.text(); // Get raw request body as a string
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret); // Verify the webhook signature
    console.log("✅ Webhook verified:", event);
  } catch (err) {
    console.error(`❌ Webhook Error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "charge.succeeded":
      const session = event.data.object; // The Checkout Session object
      console.log("✅ Checkout session completed:", session);

      try {
        // Fetch line items using the session ID
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

        console.log("✅ Line Items:", lineItems.data);

        // Process line items here (e.g., save to your database)
        lineItems.data.forEach((item) => {
          console.log(`Item: ${item.description}, Quantity: ${item.quantity}, Price: ${item.price.unit_amount}`);
        });
      } catch (err) {
        console.error("❌ Failed to fetch line items:", err.message);
        return new Response("Failed to fetch line items", { status: 500 });
      }
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Respond to Stripe that the event was successfully received
  return new Response("Event received", { status: 200 });
}
