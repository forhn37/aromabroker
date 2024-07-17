'use client';

import { signOut, useSession } from 'next-auth/react';

export default function SignoutPage() {
  const { data: session, status } = useSession();
  console.log(session)

  return (
    <header>
      {status === 'authenticated' ? (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <p>You are not signed in</p>
      )}
    </header>
  );
}