// checkout/route.ts
import { Polar } from '@polar-sh/sdk';

// Debug: Check if access token is set

const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!, 
  server: 'sandbox', // Use sandbox for development
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const products = searchParams.get('products')?.split(',') || [];



    // Create checkout session with product ID
    const checkout = await polar.checkouts.create({
      products: products,
      successUrl: process.env.NEXT_PUBLIC_APP_URL
        ? `${process.env.NEXT_PUBLIC_APP_URL}`
        : 'http://localhost:3000/',
      customerEmail: searchParams.get('customerEmail') || undefined,
      customerName: searchParams.get('customerName') || undefined,
      metadata: {
        source: 'donation_button',
        timestamp: new Date().toISOString(),
      },
    });

    // Redirect to Polar checkout
    return Response.redirect(checkout.url);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    const errorDetails = error instanceof Error ? error.stack : String(error);

    return Response.json(
      {
        error: 'Failed to create checkout',
        message: errorMessage,
        details: errorDetails,
      },
      { status: 500 }
    );
  }
}
