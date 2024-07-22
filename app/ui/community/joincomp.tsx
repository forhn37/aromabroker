'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase/supabaseClient';
import { useRouter } from 'next/navigation';
import { checkDuplicateEmail } from '@/app/lib/supabase/checkDuplicateEmail';
import AddressModal from '@/app/lib/addressmodal';

export default function Join() {
  const [userType, setUserType] = useState('personal');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [postcode, setPostcode] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleAddressComplete = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.type === 'addressComplete') {
        setPostcode(event.data.addressData.zonecode);
        setAddress(event.data.addressData.address);
      }
    };
    if (typeof window !== 'undefined') {
    window.addEventListener('message', handleAddressComplete);
    }
    return () => {
      if (typeof window !== 'undefined') {
      window.removeEventListener('message', handleAddressComplete);
      }
    };
  }, []);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isIdChecked) {
      setError('아이디 중복확인을 눌러주세요');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 동일하지 않습니다. ');
      return;
    }
    if (!isEmailChecked) {
      setError('이메일 중복확인을 눌러주세요 ');
      return;
    }

    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase
      .from('profiles')
      .insert([{
        id: data.user?.id,
        username: id,
        full_name: name,
        business_name: businessName,
        business_number: businessNumber,
        address,
        detail_address: extraAddress,
        zonecode: postcode,
        phone,
        email,
      }]);

    if (insertError) {
      setError(insertError.message);
    } else {
      router.push('/');
    }

    setLoading(false);
  };

  const checkDuplicateId = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('username', id);

    if (error) {
      setError('다시 시도해주세요.');
      return;
    }

    if (data.length > 0) {
      setError('이미 사용중인 아이디입니다.');
      setIsIdChecked(false);
    } else {
      setError(null);
      setIsIdChecked(true);
    }
  };

  const handleEmailCheck = async () => {
    const isDuplicate = await checkDuplicateEmail(email);
    if (isDuplicate) {
      setError('이미 사용중인 이메일입니다.');
    } else {
      setError(null);
      setIsEmailChecked(true)
    }
  };

  const openAddressSearch = () => {
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    if (typeof window !== 'undefined') {

      window.open('/address-modal', '주소 검색', `width=${width},height=${height},left=${left},top=${top}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">회원가입</h1>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-gray-700">회원인증</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="userType" value="personal" checked={userType === 'personal'} onChange={() => setUserType('personal')} className="form-radio" />
              <span className="ml-2">개인회원</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="userType" value="business" checked={userType === 'business'} onChange={() => setUserType('business')} className="form-radio" />
              <span className="ml-2">사업자회원</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="id" className="block text-gray-700">아이디 *</label>
          <div className="flex">
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <button type="button" onClick={checkDuplicateId} className="ml-2 p-2 bg-gray-500 text-white rounded-md">중복확인</button>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">비밀번호 *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm" className="block text-gray-700">비밀번호 확인 *</label>
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700">이름 *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-gray-700">상호명 *</label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required={userType === 'business'}
            disabled={userType !== 'business'}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="businessNumber" className="block text-gray-700">사업자번호</label>
          <input
            type="text"
            id="businessNumber"
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)}
            disabled={userType !== 'business'}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="block text-gray-700">우편번호 *</label>
          <div className="flex">
            <input
              type="text"
              id="postcode"
              value={postcode}
              readOnly
              className="p-2 border border-gray-300 rounded-md"
              placeholder="우편번호"
            />
            <button type="button" onClick={openAddressSearch} className="ml-2 p-2 bg-gray-500 text-white rounded-md">주소검색</button>
          </div>
        </div>
        <div>
          <input
            type="text"
            id="address"
            value={address}
            readOnly
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="주소"
          />
          <input
            type="text"
            id="extraAddress"
            value={extraAddress}
            onChange={(e) => setExtraAddress(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="나머지 주소 (선택 입력 가능)"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">휴대전화 *</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">이메일 *</label>
          <div className="flex">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <button type="button" onClick={handleEmailCheck} className="ml-2 p-2 bg-gray-500 text-white rounded-md">중복확인</button>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" disabled={loading} className="w-full p-2 bg-blue-500 text-white rounded-md">
          {loading ? '가입 중...' : '가입하기'}
        </button>
      </form>
    </div>
  );
}