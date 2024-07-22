'use client';

import { useRouter } from 'next/navigation';
import AddressModal from '@/app/lib/addressmodal';

const AddressModalPage = () => {
  const router = useRouter();

  const handleComplete = (data: { zonecode: string; address: string }) => {
    if (window.opener) {
      window.opener.postMessage({ type: 'addressComplete', addressData: data }, window.location.origin);
      window.close();
    }
  };

  const handleClose = () => {
    window.close();
  };

  return (
    <div>
      <AddressModal onComplete={handleComplete} onClose={handleClose} />
    </div>
  );
};

export default AddressModalPage;
