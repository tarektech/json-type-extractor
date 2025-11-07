import React from 'react';
import { Button } from './ui/button';
import { Coffee } from 'lucide-react';
import { createCheckout } from '@/app/actions/actions';

export default function CheckoutButton() {
  return (
    <form action={createCheckout}>
      <Button
        variant="outline"
        className="text-primary hover:text-primary/90 cursor-pointer inline-flex items-center gap-2"
        type="submit"
      >
        <>
          <Coffee className="size-4" />
          Buy Me a Coffee
        </>
      </Button>
    </form>
  );
}
