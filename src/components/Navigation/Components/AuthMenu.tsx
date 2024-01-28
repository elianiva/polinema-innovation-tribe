import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import {
  HiArrowLeftOnRectangle as ArrowLeft,
  HiCog6Tooth as Gear,
  HiLightBulb as LightBulb,
  HiUserCircle as UserCircleIcon
} from "react-icons/hi2";

type NavigationMenuItem = {
  name: string;
  url: string;
  icon: ReactNode,
}

type AuthMenuProps = {
  username: string;
  name: string;
  profileImage: string;
};

export function AuthMenu(props: AuthMenuProps) {
  const navigationMenuItems: NavigationMenuItem[] = [
    {
      name: "My Profile",
      url: `/profile/${props.username}`,
      icon: <UserCircleIcon />
    },
    {
      name: "Log Out",
      url: "/user/logout",
      icon: <ArrowLeft />
    }
  ];

  return (
    <Menu
      as={"div"}
      className={"relative text-gray-200 z-50"}
    >
      <Menu.Button
        className={
          "w-10 h-10 flex justify-center items-center border-2 border-slate-600 rounded-full cursor-pointer"
        }
      >
        <Image
          className="w-10 h-10 rounded-full"
          src={props.profileImage}
          alt={props.username}
          width={40}
          height={40}
        />
      </Menu.Button>
      <Transition
        as={"div"}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className={"z-50"}
      >
        <Menu.Items
          className="absolute right-0 mt-2 w-56 rounded-lg bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-2 p-3 z-50"
        >
          <Menu.Item
            as="div"
            className={[
              "bg-slate-800 p-2 rounded-lg flex items-center justify-start gap-2"
            ].join(" ")}
          >
            Halo, {props.name}
          </Menu.Item>
          {navigationMenuItems.map((item) => (
            <Menu.Item
              key={item.url}
              as={Fragment}
            >
              {({ active }) => (
                <Link
                  href={item.url}
                  className={[
                    `${active ? "bg-slate-900" : "bg-slate-800"}`,
                    "p-2 rounded-lg flex items-center justify-start gap-2"
                  ].join(" ")}
                >
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
