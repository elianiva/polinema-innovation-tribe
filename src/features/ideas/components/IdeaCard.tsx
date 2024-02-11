import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import tinycolor from "tinycolor2";
import { HiCalendar as CalendarIcon, HiChatBubbleOvalLeft as CommentIcon } from "react-icons/hi2";
import Link from "next/link";
import type { AuthorSchema, IdeaSchema } from "~/features/ideas/schema/idea";
import type { TagSchema } from "~/features/ideas/schema/tag";
import type { CommentSchema } from "~/features/ideas/schema/comment";

export type IdeaCardProps = Pick<IdeaSchema, "id" | "title" | "description" | "updatedAt"> & {
  author: Pick<AuthorSchema, "id" | "fullname" | "picture" | "username">
  comments: CommentSchema[]
  tags: TagSchema[]
};

export function IdeaCard(props: IdeaCardProps) {
  return (
    <>
      <Link
        href={`/idea/${props.id}`}
        className={
          "p-5 border border-slate-700 bg-slate-800/40 rounded-lg flex gap-3 cursor-pointer hover:ring-2 hover:ring-purple-600 transition-all duration-200 ease-in-out flex-col"
        }
      >
        <div>
          <div className="flex flex-row gap-2 items-center">
            <div className={"w-12 h-12 rounded-full overflow-hidden"}>
              <Image
                src={props.author.picture}
                alt={props.author.fullname}
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className={"text-gray-200 text-md font-semibold"}>
                {props.author.fullname}
              </p>
              <p className={"text-gray-500 font-normal text-sm"}>
                @{props.author.username}
              </p>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-2 flex-1"}>
          <h1 className={"text-gray-200 font-bold text-lg "}>{props.title}</h1>
          <p className={"line-clamp-2 text-slate-400 text-base w-full"}>
            {props.description}
          </p>
          <div
            className={"flex justify-between md:flex-row flex-col mt-2 gap-2"}
          >
            <div
              className={
                "flex flex-row gap-4 items-center justify-start md:justify-center"
              }
            >
              <span className="text-slate-400 flex items-center gap-1 text-sm capitalize">
                <CalendarIcon />
                {formatDistanceToNow(props.updatedAt, { addSuffix: true })}
              </span>
              <div className="text-sm text-slate-400 flex items-center gap-1">
                <CommentIcon />
                {props.comments.length > 0 ? (
                  <>
                    {`${props.comments.length} ${
                      props.comments.length > 1 ? "Responses" : "Response"
                    }`}
                  </>
                ) : (
                  "No Response"
                )}
              </div>
            </div>
            <div className="flex gap-3">
              {props.tags.map((tag) => (
                <span
                  key={tag.name}
                  className=""
                  style={{
                    color: tinycolor(tag.colour)
                      .desaturate(50)
                      .toPercentageRgbString()
                  }}
                >
                  #{tag.slug}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
