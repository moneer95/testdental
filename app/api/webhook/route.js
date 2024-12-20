
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51PVRD2K1xhAcvKUPUmROPyTxMKMf6wvbNvJzbI3V2Hb28MEjbyW54sAifxvep58oCQXpeBuYAmQu118P2I1vnBgW00H1HmD2KL"); // Your Stripe Secret Key
const endpointSecret = "whsec_TlHGKp5kmrxnuTsQTSxuiJ0R6lJzDc1P"; // Your Webhook Secret

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing to handle raw request body
  },
};

export async function POST(req) {
  const sig = req.headers.get('stripe-signature'); // Retrieve the Stripe signature header
  let event;

  console.log('Stripe Signature:', sig);


  try {
    // Use req.text() to get the raw request body as a string
    const rawBody = await req.text();

    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);

    console.log('✅ Webhook verified:', event);
  } catch (err) {
    console.error(`❌ Webhook Error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('✅ Checkout session completed:', session);

      // Add your business logic here, such as updating the database
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Respond to Stripe that the event was successfully received
  return new Response('Event received', { status: 200 });
}
