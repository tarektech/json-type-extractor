'use server';


import { redirect } from 'next/navigation';


export const createCheckout = async () => {
    const productId = '93f5af70-4317-468a-9019-45e3a6f01b78';
    const params = new URLSearchParams({
        products: productId,
    });
    redirect(`/api/checkout?${params.toString()}`);
};