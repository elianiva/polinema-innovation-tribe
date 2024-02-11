import { useState } from "react";
import { AiFillInfoCircle as InfoIcon } from "react-icons/ai";

type TipsButtonProps = {
  name: string;
  description: string;
}

export default function TipsButton(props: TipsButtonProps) {
  const [checked, setChecked] = useState(false);

  return (
    <button
      onClick={() => setChecked(prev => !prev)}
      className={[
        "text-left whitespace-nowrap w-full text-gray-200 flex flex-col justify-start items-start p-4 rounded-lg transition-all ease-in-out duration-300",
        checked
          ? "bg-purple-800 hover:bg-purple-700"
          : "bg-gray-700 hover:bg-gray-600"
      ].join(" ")}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-bold">{props.name}</h1>
        <InfoIcon fontSize={14} />
      </div>
      <div className={checked ? "block" : "hidden"}>
        <p className="text-left whitespace-pre-line text-sm text-gray-300 mt-2 font-medium tracking-wide">
          {props.description}
        </p>
      </div>
    </button>
  );
}
