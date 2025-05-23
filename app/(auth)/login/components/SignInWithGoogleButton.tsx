"use client";

import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
 import { FcGoogle } from "react-icons/fc"
 import Router from "next/router";
import React from "react";


const SignInWithGoogleButton = () => {
  const handleGoogleLogin = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Google Sign-in failed:", error.message);
    }
    else{
       Router.push('/dashboard')
    }
  };

  return (

<Button type="button" className="w-full flex items-center justify-center gap-2" onClick={handleGoogleLogin}>
  <FcGoogle className="h-5 w-5" />
  Continue with Google
</Button>

  );
};

export default SignInWithGoogleButton;
