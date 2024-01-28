"use client";

import Link from "next/link";
import { useReducer } from "react";
import { PolitribeLogo } from "~/icons/ic_politribe-logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AuthMenu } from "~/components/Navigation/AuthMenu";
import { NavLink } from "~/components/Navigation/NavLink";


const LINKS: { name: string; url: string }[] = [
  { name: "Home", url: "/" },
  { name: "Competition", url: "/competition" },
  { name: "Sandbox", url: "/idea" }
];

export function AuthButton() {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <Link
        href="/login"
        className="bg-[#202A3C] px-4 py-2 rounded-lg text-gray-200 text-sm w-full md:w-auto text-center"
      >
        Login
      </Link>
      <Link
        href={"/register"}
        className="bg-purple-600 px-4 py-2 rounded-lg text-gray-200 text-sm w-full md:w-auto text-center"
      >
        Register
      </Link>
    </div>
  );
}

type NavbarProps = {
  user: {
    username: string;
    name: string;
    profileImage: string;
  } | null;
}

export function Navbar(props: NavbarProps) {
  const [isOpen, toggleNavbar] = useReducer((prev) => !prev, false);
  return (
    <nav className="z-[999] w-full justify-between">
      <div className="md:grid md:grid-cols-3 md:items-center px-4 md:px-0 mx-auto justify-between py-8 max-w-screen-xl">
        <div id="left-side">
          <div className="flex items-center justify-between md:block">
            <Link href="/">
              <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                <PolitribeLogo className="w-7 h-7 text-white" />
              </h2>
            </Link>
            <div className="md:hidden flex gap-2 ">
              <button
                className="p-2 text-gray-700 rounded-lg outline-none "
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <IoClose className="text-gray-200 font-bold text-xl" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-gray-200 font-bold text-xl" />
                )}
              </button>
              {props.user !== null && (
                <AuthMenu
                  name={props.user.name}
                  profileImage={props.user.profileImage}
                  username={props.user.username}
                />
              )}
            </div>
          </div>
        </div>
        <div id="right-side">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              {LINKS.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  href={link.url}
                />
              ))}
            </div>
            <div className="mt-3 space-y-2 md:hidden sm:inline-block w-full">
              {props.user === null && <AuthButton />}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:flex text-gray-200 justify-self-end">
          {props.user === null ? (
            <AuthButton />
          ) : (
            <AuthMenu
              name={props.user.name}
              profileImage={props.user.profileImage}
              username={props.user.username}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
