import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK);

const username = process.env.NEXT_PUBLIC_API_USERNAME;
const password = process.env.NEXT_PUBLIC_API_PASSWORD;
const encodedCredentials = btoa(`${username}:${password}`);
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
let line_items_data = null

export async function POST(req) {
  
  try {

    const body = await req.json(); // Parse request body
    console.log("Request body:", body); // Debug request body

    // get items
    try {
        const response = await fetch(
            `${baseUrl}/api/method/ea_dental.api.get_cart_items`,
            {
                method: "POST", // Change to POST
                headers: {
                    Authorization: `Basic ${encodedCredentials}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart_items: body.items }), // Send the payload in the body
            }
        );

        const data = await response.json();
        
        if (data.message) {
                // Check for sufficient stock
                const validItems = data.message.filter((item) => {
                    if (item.quantity > item.available_stock) {
                        // Notify user about the insufficient stock
                        // notify(`"${item.name}" removed from cart due to insufficient stock.`);
                        return false; // Exclude this item from the valid items
                    }
                    return true; // Keep the item in the cart
                });

                line_items_data = validItems

                // localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
        } else {
            // notify("Failed to fetch cart details.");
        }
    } catch (error) {
        console.error("Error fetching cart data:", error);
        // notify("Error fetching cart details.");
    }

    if (false) {
      throw new Error("Amount is required");
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: line_items_data.map(item => (
        {
            price_data: {
                currency: "usd",
                product_data: {
                  name: item.name,
                },
                unit_amount: item.price * 100,
              },
              quantity: item.quantity,
        }
      )),
      mode: 'payment',
      return_url: `https://example.com/return?session_id={CHECKOUT_SESSION_ID}`,
      tax_id_collection: {
        enabled: true,
      },      
    });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
