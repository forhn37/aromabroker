'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { Session, AuthChangeEvent } from "@supabase/supabase-js";

const SignInPage = () => {
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

    const { data: authListener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const clickGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: 'http://localhost:3000/login',
      },
    });

    if (error) {
      console.error('Error logging in with GitHub:', error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      setSession(null);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        {session ? (
          <>
            <button onClick={handleLogout}>Log Out</button>
            <div>
              <p>Logged in as {session.user.email}</p>
              <p>User ID: {session.user.id}</p>
            </div>
          </>
        ) : (
          <button onClick={clickGithub}>GitHub Login</button>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
