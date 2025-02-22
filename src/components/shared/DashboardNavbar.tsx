"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/members/add", label: "Add Member" },
  { href: "/profile", label: "Profile" },
];

const DashNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mb-6 flex gap-6 bg-white shadow-md p-4 rounded-lg justify-between">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href
              ? "text-blue-600 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          {label}
        </Link>
      ))}
      <div>
        <button
          onClick={() => signOut()}
          className="bg-rose-600 text-white p-2 rounded hover:bg-rose-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashNavbar;
