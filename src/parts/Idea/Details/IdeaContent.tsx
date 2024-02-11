import {
  MdOutlineLightbulb as OutlineLightbulbIcon,
  MdOutlineReportProblem as OutlineReportProblemIcon
} from "react-icons/md";
import IdeaHeader from "./IdeaHeader";
import { HiCalendar } from "react-icons/hi";
import { formatDistanceToNow } from "date-fns";
import type { IdeaSchema } from "~/schema/idea";
import { IdeaComments } from "~/parts/Idea/Details/IdeaComments";

export default function IdeaContent(props: IdeaSchema) {
  return (
    <div className="max-w-4xl p-1 lg:sticky lg:top-0 w-[100%] lg:w-[80%]">
      <div className="rounded-lg p-4 flex flex-col gap-4">
        <IdeaHeader {...props} />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-slate-200">
            {props.title}
          </h1>
          <span className="text-slate-400 flex items-center gap-1 text-sm">
            <HiCalendar />
            {formatDistanceToNow(props.updatedAt, { addSuffix: true })}
          </span>
        </div>
        <div
          id="description"
          className="flex flex-col gap-3"
        >
          <p className="text-lg text-slate-400">{props.description}</p>
        </div>
        <div
          id="problem"
          className="flex flex-col gap-2"
        >
          <div className="font-bold text-slate-200 flex flex-row gap-2 items-center bg-purple-800/20 py-2 px-4 rounded-lg">
            <OutlineReportProblemIcon className="inline text-lg" />
            <h3 className="text-xl"> Problem </h3>
          </div>
          <p className="text-slate-400">
            {props.problem}
          </p>
        </div>
        <div
          id="solution"
          className="flex flex-col gap-2"
        >
          <div className="font-bold text-slate-200 flex flex-row gap-2 items-center bg-purple-800/20 py-2 px-4 rounded-lg">
            <OutlineLightbulbIcon className="inline text-lg" />
            <h3 className="text-xl"> Solution </h3>
          </div>
          <p className="text-slate-400">
            {props.solution}
          </p>
        </div>
        <IdeaComments />
      </div>
    </div>
  );
}
