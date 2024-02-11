import Image from "next/image";
import { fetchUserProfile } from "~/services/user/profile";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { fetchIdeasByUsername } from "~/services/idea/ideas-by-username";
import IdeasList from "~/features/Idea/Index/IdeasList";

type ProfilePageProps = {
  params: {
    username: string;
  }
}

export const metadata: Metadata = {
  title: "Profile"
};

export default async function ProfilePage(props: ProfilePageProps) {
  const user = await fetchUserProfile(cookies(), props.params.username);
  const ideas = await fetchIdeasByUsername(cookies(), props.params.username);

  return (
    <div className="w-full max-w-screen-xl mx-auto md:items-center justify-center gap-12 text-slate-200 flex flex-col">
      <div className="flex gap-4 flex-col w-full">
        <section className="flex flex-col gap-2 p-0">
          <div className="flex flex-col gap-4 md:flex-row">
            <div
              className="bg-slate-800/40 border border-slate-700 p-8 rounded-lg w-full md:w-[40%]"
            >
              <div className="bg-gradient-to-tr from-blue-400 to-fuchsia-600 w-fit rounded-full p-[0.15rem] mx-auto">
                <Image
                  className="w-16 rounded-full"
                  src={
                    user?.picture ??
                    `https://source.boringavatars.com/beam/120/${encodeURIComponent(
                      user?.username as string
                    )}?colors=fca2e1,93b5ff,6be4dc,f9e3a9,4a6cb6`
                  }
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
              <section className="py-2 flex flex-col border-b border-slate-700">
                <h1 className="font-bold text-xl text-center">{user?.fullname}</h1>
                <span className="block text-center text-slate-500">@{user?.username}</span>
              </section>
              <section className="py-2 flex flex-col gap-1">
                <h4 className="text-slate-400 font-semibold">Email</h4>
                <p>{user?.email}</p>
              </section>
              <section className="py-2 flex flex-col gap-1">
                <h4 className="text-slate-400 font-semibold">Bio</h4>
                <p>{user?.bio ?? "I'm a mysterous person"}</p>
              </section>
            </div>
            <div
              className="bg-slate-800/40 border border-slate-700 p-8 rounded-lg w-full md:w-full"
            >
              <div className="border-b border-slate-700 pb-2 mb-4">
                <h1 className="font-bold text-2xl">My Ideas</h1>
              </div>
              <IdeasList
                hideHeader
                ideas={ideas}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
