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
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessItem, setBusinessItem] = useState('');
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

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // 회원가입 후 원하는 페이지로 리디렉션
      router.push('/'); // 예: welcome 페이지로 리디렉션
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
    <div>
      <h1>Join</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label>회원인증</label>
          <input type="radio" name="userType" value="personal" checked={userType === 'personal'} onChange={() => setUserType('personal')} /> 개인회원
          <input type="radio" name="userType" value="business" checked={userType === 'business'} onChange={() => setUserType('business')} /> 사업자회원
        </div>
        <div>
          <label htmlFor="id">아이디 *</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button type="button" onClick={checkDuplicateId}>중복확인</button>
        </div>
        <div>
          <label htmlFor="password">비밀번호 *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">비밀번호 확인 *</label>
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">주소</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">휴대전화</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">이메일 *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="button" onClick={checkDuplicateEmail}>중복확인</button>
        </div>
        {userType === 'business' && (
          <div>
            <label htmlFor="businessType">업태</label>
            <input
              type="text"
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>
        )}
        {userType === 'business' && (
          <div>
            <label htmlFor="businessItem">종목</label>
            <input
              type="text"
              id="businessItem"
              value={businessItem}
              onChange={(e) => setBusinessItem(e.target.value)}
            />
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
