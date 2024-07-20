 'use client';

import AddressModal from "../lib/addressmodal";
import React from 'react';

const AddressModalPage: React.FC = () => {
  const handleComplete = (addressData: { zonecode: string, address: string }) => {
    if (window.opener) {
      window.opener.postMessage(addressData, window.opener.location.origin);
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
