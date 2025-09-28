"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function ProfileMenu() {
  const { data: session } = useSession();
  const user = session?.user;

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <Menu.Button className="group flex items-center space-x-1 border border-gray-500 rounded-full px-2 py-1 hover:bg-gray-800 transition">
          <Bars3Icon className="w-6 h-6 text-white group-hover:text-gray-300 transition" />
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">
              {initials}
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-gray-900 text-white divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="px-1 py-1">
            {session && (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={`${
                        active ? "bg-gray-800" : ""
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/bookings"
                      className={`${
                        active ? "bg-gray-800" : ""
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      My Bookings
                    </Link>
                  )}
                </Menu.Item>
              </>
            )}
          </div>

          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) =>
                session ? (
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className={`${
                      active ? "bg-gray-800" : ""
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/auth/login"
                    className={`${
                      active ? "bg-gray-800" : ""
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Login
                  </Link>
                )
              }
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
