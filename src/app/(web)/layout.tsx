import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navigation/Navbar";
import Loading from "~/app/(auth)/loading";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "~/utils/supabase";
import { fetchUserProfile } from "~/features/authentication/services/profile";

export default async function RootLayout(props: PropsWithChildren<{}>) {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { session } } = await supabase.auth.getSession();
  const profile = session === null ? null : await fetchUserProfile(cookieStore, session?.user?.email as string);

  return (
    <div className="flex justify-between flex-col h-full">
      <div className="z-20">
        <Navbar
          user={profile === null ? null : {
            username: profile.username,
            name: profile.fullname,
            profileImage: profile.picture
          }}
        />
      </div>
      <div className="flex-1 py-10">
        <Suspense fallback={<Loading />}>
          <main className="h-full">{props.children}</main>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
