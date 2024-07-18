'use client';

import { useState } from 'react';
import { supabase } from '@/app/lib/supabase/supabaseClient';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    // Supabase 회원가입 처리
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
  
    // 추가 정보 저장 (아이디, 이름, 상호명, 사업자번호, 주소, 전화번호)
    const { error: insertError } = await supabase
      .from('profiles')
      .insert([
        {
          id: data.user?.id,
          username: id,
          full_name: name,
          business_name: businessName,
          business_number: businessNumber,
          address,
          phone,
          email,
        },
      ]);
  
    if (insertError) {
      setError(insertError.message);
    } else {
      router.push('/'); // 회원가입 후 리디렉션
    }
  
    setLoading(false);
  };
  

  const checkDuplicateId = async () => {
    // ID 중복 확인 로직 추가
  };

  const checkDuplicateEmail = async () => {
    // Email 중복 확인 로직 추가
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
          <label htmlFor="address" className="block text-gray-700">주소 *</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
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
            <button type="button" onClick={checkDuplicateEmail} className="ml-2 p-2 bg-gray-500 text-white rounded-md">중복확인</button>
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
