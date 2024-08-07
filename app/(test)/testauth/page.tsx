// app/auth/page.tsx
"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const SignIn = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <div className="h-full flex justify-center items-center">
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          style: { container: { width: "300px" } },
        }}
        //  {/*CSS 커스텀 가능*/}
        providers={["google"]}
        //  {/*카카오로 설정해주어야 함.*/}
        localization={{}} 
        // {/*내부 글 커스텀 가능*/}
      />
    </div>
  );
};

export default SignIn;