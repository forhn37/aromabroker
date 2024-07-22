'use client';

import AddressModal from "@/app/lib/addressmodal";

const AddressModalPage = () => {
  const handleComplete = (address: string) => {
    if (window.opener) {
      window.opener.postMessage({ address }, window.location.origin);
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
