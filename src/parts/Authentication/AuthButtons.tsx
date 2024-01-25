"use client";

import { GoogleIcon } from "~/icons/ic_google-icon";
import Link from "next/link";
import { HiUser as UserIcon } from "react-icons/hi2";
import { supabaseBrowser } from "~/utils/supabase";

type GoogleAuthProps = {
  name: "Register" | "Login";
};

export function AuthButtons({ name }: GoogleAuthProps) {
  async function handleGoogleAuth() {
    await supabaseBrowser.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        },
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`
      }
    });
  }

  return (
    <div className="w-full space-y-3">
      <button
        className="flex w-full items-center justify-center space-x-2 text-gray-200 bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-lg"
        onClick={handleGoogleAuth}
      >
        <GoogleIcon />
        <a className="text-sm font-normal">{name} with Google</a>
      </button>
      <Link
        href={name == "Register" ? "/register/email" : "/login/email"}
        className="flex w-full items-center justify-center space-x-2 text-gray-200 bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-lg"
      >
        <UserIcon />
        <span className="text-sm font-normal">{name} with Email</span>
      </Link>
    </div>
  );
}
