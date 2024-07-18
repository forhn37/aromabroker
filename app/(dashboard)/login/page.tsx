'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function SignInPage() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
      } else {
        setSession(data.session);
      }
    };

    checkLogin();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Login</h1>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          providers={['google', 'kakao']}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <div>
          <p>Logged in as {session.user?.email}</p>
        </div>
      )}
    </div>
  );
}
