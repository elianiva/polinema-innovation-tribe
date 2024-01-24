import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import UserNavigation from "~/data/Navigation/UserNavigation";
import { Fragment } from "react";
import Link from "next/link";

type AuthMenuProps = {
  username: string;
  name: string;
  profileImage: string;
};

export function AuthMenu(props: AuthMenuProps) {
  return (
    <Menu as={"div"} className={"relative text-gray-200 z-50"}>
      <Menu.Button
        className={
          "w-10 h-10 flex justify-center items-center border-2 border-slate-600 rounded-full cursor-pointer"
        }
      >
        {/*{user?.app_metadata.provider === "google" ? (*/}
        {/*  <Image*/}
        {/*    className={"w-10 h-10 rounded-full"}*/}
        {/*    src={user.user_metadata.picture}*/}
        {/*    alt={user.user_metadata.full_name}*/}
        {/*    width={40}*/}
        {/*    height={40}*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <UserIcon />*/}
        {/*)}*/}
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
          className="absolute right-0 mt-2 w-56 rounded-lg bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-2 p-3 z-50">
          <Menu.Item
            as="div"
            className={[
              "bg-slate-800 p-2 rounded-lg flex items-center justify-start gap-2"
            ].join(" ")}
          >
            Halo, {props.name}
          </Menu.Item>
          {UserNavigation.map((item) => (
            <Menu.Item key={item.url} as={Fragment}>
              {({ active }) => (
                <Link
                  href={item.url}
                  onClick={(e) => {
                    if (item.isForbidden) {
                      e.preventDefault();
                    }
                  }}
                  className={[
                    `${active ? "bg-slate-900" : "bg-slate-800"}`,
                    "p-2 rounded-lg flex items-center justify-start gap-2",
                    item.isForbidden ? "cursor-not-allowed" : ""
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
