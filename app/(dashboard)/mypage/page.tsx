'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase/supabaseClient';
import { Session } from '@supabase/supabase-js';

const MyPage = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      } else {
        setSession(data.session);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchProfile(session.user.id);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl mb-10">My Page</h1>
      {session ? (
        <div>
          <p>Logged in as {session.user?.email}</p>
          {profile && (
            <div>
              <p>Username: {profile.username}</p>
              <p>Full Name: {profile.full_name}</p>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
              <p>Address: {profile.address}</p>
              {/* Add other profile fields as necessary */}
            </div>
          )}
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default MyPage;
