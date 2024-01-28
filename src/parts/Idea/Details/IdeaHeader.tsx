import Link from "next/link";
import Image from "next/image";
import type { IdeaSchema } from "~/schema/idea";

export default function IdeaHeader(props: IdeaSchema) {
  return (
    <div className="flex flex-row justify-between items-start pb-4 border-b border-b-slate-600/60">
      <div
        className="flex flex-row items-center gap-2 transition-all duration-300 ease-in-out"
      >
        <div>
          <Image
            src={props.author.picture}
            alt={props.author.fullname}
            width={38}
            height={38}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-gray-200 text-md font-semibold">
            {props.author.fullname}
          </p>
          <p className={"text-gray-500 font-normal text-sm"}>
            @{props.author.username}
          </p>
        </div>
      </div>
      <Link
        href={`/profile/${props.author.username}`}
        className="bg-purple-600 text-gray-200 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-purple-500"
      >
        See Profile
      </Link>
    </div>
  );
}
