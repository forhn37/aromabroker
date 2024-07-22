'use client'
import React from 'react';
import DaumPostcode from 'react-daum-postcode';

interface AddressModalProps {
  onComplete: (address: { zonecode: string, address: string }) => void;
  onClose: () => void;
}

const AddressModal: React.FC<AddressModalProps> = ({ onComplete, onClose }) => {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    window.opener.postMessage(
      { type: 'addressComplete', addressData: { zonecode: data.zonecode, address: fullAddress } },
      window.location.origin
    );
    window.close();
  };

  return (
    <div className="modal">
      <button onClick={onClose} className="close-button">닫기</button>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
};

export default AddressModal;
