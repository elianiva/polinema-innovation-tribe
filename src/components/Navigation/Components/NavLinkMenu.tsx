import { NavLink } from "~/components/Navigation/NavLink";

type NavLinkMenuProps = {
  name: string;
  url: string;
};

export function NavLinkMenu(props: NavLinkMenuProps) {
  return (
    <div>
      <NavLink href={props.url} activeClass="text-purple-500">
        <h2 className="text-sm font-bold md:border-none hover:text-purple-500">
          {props.name}
        </h2>
      </NavLink>
    </div>
  );
}