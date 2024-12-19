'use client'

import { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { getCartPayload } from "../utils/cartUtils";





// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PK}`);

export default function page() {
      

    const fetchClientSecret = useCallback(() => {

        const payload = getCartPayload();

        // Create a Checkout Session
        return fetch("/api/checkout", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: payload }),
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = { fetchClientSecret };

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

