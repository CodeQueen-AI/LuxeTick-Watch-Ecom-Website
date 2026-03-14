// import Stripe from "stripe";
// import { NextResponse } from "next/server";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-07-30.basil",
// });

// export async function POST(req: Request) {
//   try {
//     const { cartItems } = await req.json();

//     const line_items = cartItems.map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: [
//             item.image.startsWith("http")
//               ? item.image
//               : `http://localhost:3000/${item.image}`,
//           ],
//         },
//         unit_amount: item.price * 100, 
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items,
//       mode: "payment",

//       // Payment successful hone par
//       success_url: `${req.headers.get("origin")}/success`,

//       // Payment reject / cancel hone par
//       cancel_url: `${req.headers.get("origin")}/reject`,
//     });

//     return NextResponse.json({ url: session.url });

//   } catch (err: any) {
//     console.error("Stripe Error:", err);
//     return NextResponse.json(
//       { error: err.message },
//       { status: 500 }
//     );
//   }
// }






import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

export async function POST(req: Request) {
  try {
    const { cartItems } = await req.json();

    const line_items = cartItems.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [
            item.image.startsWith("http")
              ? item.image
              : `http://localhost:3000/${item.image}`,
          ],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",

      // success
      success_url: `${req.headers.get("origin")}/cart?success=true`,

      // reject / cancel
      cancel_url: `${req.headers.get("origin")}/cart?reject=true`,
    });

    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("Stripe Error:", err);

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}