import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navigation/Navbar";
import "~/styles/globals.css";
import Loading from "~/app/(auth)/loading";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "~/utils/supabase";

export default async function RootLayout(props: PropsWithChildren<{}>) {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <div className="flex justify-between flex-col h-full">
      <div className="z-20">
        <Navbar
          user={user === null ? null : {
            username: user.user_metadata.username,
            name: user.user_metadata.full_name,
            profileImage: user.user_metadata.avatar_url
          }}
        />
      </div>
      <div className="flex-1">
        <Suspense fallback={<Loading />}>
          <main className="h-full">{props.children}</main>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
