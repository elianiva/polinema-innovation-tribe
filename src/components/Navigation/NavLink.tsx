import Link from "next/link";
import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  name: string;
  href: string;
};

export function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={"group text-slate-500/90 transition-all duration-300 ease-in-out"}
    >
      <span
        className={[
          pathname === props.href ? "text-purple-400" : "",
          "bg-left-bottom bg-gradient-to-r from-purple-400 to-purple-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out "
        ].join(" ")}
      >
        <h2 className="text-sm font-bold md:border-none hover:text-purple-400">
          {props.name}
        </h2>
      </span>
    </Link>
  );
}
