'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function PurchaseSuccessHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const success = searchParams.get('success');
    
    if (success === 'true') {
      toast.success('Thank you for buying me a coffee! ☕', {
        description: 'Your support means a lot!',
        duration: 5000,
      });
      
      // Clear the URL parameter
      router.replace('/', { scroll: false });
    }
  }, [searchParams, router]);

  return null;
}





