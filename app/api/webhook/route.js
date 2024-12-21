import Stripe from "stripe";
const divideItems = require("../../lib/webhookHandlers") 

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK); // Your Stripe Secret Key
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Your Webhook Secret

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing to handle raw request body
  },
};

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
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
    case "charge.succeeded": // Handle the charge.succeeded event
      const charge = event.data.object; // The charge object
      console.log("✅ Charge succeeded:", charge);

      try {
        // Retrieve the Payment Intent
        const paymentIntent = await stripe.paymentIntents.retrieve(charge.payment_intent);

        // Retrieve the Checkout Session using the Payment Intent
        const session = await stripe.checkout.sessions.list({
          payment_intent: paymentIntent.id,
        });

        if (session.data.length > 0) {
          const sessionId = session.data[0].id;

          // Fetch line items using the session ID
          const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
            expand: ['data.price.product'],
          });

          console.log("✅ Line Items:", lineItems.data);

          divideItems(lineItems)




        } else {
          console.error("❌ No matching Checkout Session found");
        }
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
