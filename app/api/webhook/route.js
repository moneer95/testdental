
import { buffer } from 'micro';
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51PVRD2K1xhAcvKUPUmROPyTxMKMf6wvbNvJzbI3V2Hb28MEjbyW54sAifxvep58oCQXpeBuYAmQu118P2I1vnBgW00H1HmD2KL", {
    apiVersion: '2024-06-20',
});

export const config = {
    api: {
        bodyParser: false, // Required by Stripe for raw body
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const endpointSecret = "whsec_1581785db894f308cc5a0f5574bdfd3d9342754ad5e70fd875e951bec2f35429";

        let event;

        try {
            // Get raw body to verify signature
            const rawBody = await buffer(req);
            const signature = req.headers['stripe-signature'];

            // Verify the signature
            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                endpointSecret
            );

            console.log('✅ Webhook verified:', event);

            // Handle the event
            switch (event.type) {
                case 'charge.succeeded':
                    const charge = event.data.object;
                    console.log('Charge succeeded:', charge);
                    break;
                // Handle other events here
                default:
                    console.log(`Unhandled event type: ${event.type}`);
            }

            res.status(200).send({ received: true });
        } catch (err) {
            console.error('❌ Webhook signature verification failed:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).send('Method Not Allowed');
    }
}
