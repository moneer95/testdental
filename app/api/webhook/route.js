import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51PVRD2K1xhAcvKUPUmROPyTxMKMf6wvbNvJzbI3V2Hb28MEjbyW54sAifxvep58oCQXpeBuYAmQu118P2I1vnBgW00H1HmD2KL');
const endpointSecret = "whsec_1581785db894f308cc5a0f5574bdfd3d9342754ad5e70fd875e951bec2f35429";

export async function POST(req) {
  const sig = req.headers.get('stripe-signature');
  let event;

  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;

      console.log('Checkout session completed:', session);

      // Fetch line items using the session ID
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      console.log('Line Items:', lineItems.data);

      // You can now access line items details here
      lineItems.data.forEach(item => {
        console.log(`Item: ${item.description}, Quantity: ${item.quantity}, Price: ${item.price.unit_amount}`);
      });

      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
