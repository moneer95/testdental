import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51PVRD2K1xhAcvKUPUmROPyTxMKMf6wvbNvJzbI3V2Hb28MEjbyW54sAifxvep58oCQXpeBuYAmQu118P2I1vnBgW00H1HmD2KL"); // Your Stripe Secret Key
const endpointSecret = "whsec_1581785db894f308cc5a0f5574bdfd3d9342754ad5e70fd875e951bec2f35429"; // Webhook signing secret

export const config = {
  api: {
    bodyParser: false, // Disable automatic body parsing by Next.js
  },
};

export async function POST(req) {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // Use req.text() to retrieve the raw request body as a string
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log(`Checkout session completed:`, session);

      // Optionally handle additional logic, e.g., updating your database
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new Response('Event received', { status: 200 });
}
