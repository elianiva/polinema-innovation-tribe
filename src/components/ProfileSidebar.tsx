import Image from "next/image";
import Link from "next/link";
import type { AuthorSchema } from "~/schema/idea";

export function ProfileSidebar(author: AuthorSchema) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <Image
          src={author.picture}
          alt={author.fullname}
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-200 text-base font-semibold">{author.fullname}</p>
        <p className="text-gray-500 font-normal text-sm">@{author.username}</p>
      </div>
      <Link
        type={"button"}
        href={`/profile/${author.username}`}
        className="btn btn-primary"
      >
        Profile
      </Link>
    </div>
  );
}
