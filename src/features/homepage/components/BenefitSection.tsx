import {
  HiUserGroup as UserGroupIcon,
  HiBookOpen as BookIcon,
  HiLightBulb as LightBulbIcon
} from "react-icons/hi2";

const benefits = [
  {
    icon: <UserGroupIcon />,
    title: "Collaboration",
    desc: "You will have the opportunity to learn and grow alongside a talented team"
  },
  {
    icon: <LightBulbIcon />,
    title: "Learning and Growth",
    desc: "Opportunity to learn and grow alongside a talented and innovative team"
  },
  {
    icon: <BookIcon />,
    title: "Information Access",
    desc: "Access to a wealth of information, including updates on various competitions"
  }
];

export default function BenefitSection() {
  return (
    <section
      className="w-full gap-3 flex flex-col items-center max-w-screen-xl mx-auto"
      id="benefit"
    >
      <div className="gradient-02 -z-40 absolute h-[30%] w-[30%] right-0 md:opacity-30 rounded-full" />
      <div className="flex flex-col gap-8 md:flex-row z-30 mt-8 justify-between w-full">
        {benefits.map((benefit) => (
          <div className="cursor-default p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out border border-slate-700">
            <div className="text-gray-200 text-xl flex flex-row gap-3 items-center bg-slate-800 relative justify-start rounded-full pl-12">
              <div className="rounded-full bg-purple-700 h-11 w-11 items-center flex justify-center absolute -left-2 py-2">
                {benefit.icon}
              </div>
              <div>
                <h5 className="text-base font-semibold tracking-tight text-slate-200 items-start flex p-1 text-start">
                  {benefit.title}
                </h5>
              </div>
            </div>
            <p className="my-2 font-normal text-gray-400 tracking-wide pr-4 pt-2 text-sm">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
