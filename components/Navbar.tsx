import Link from "next/link";
import Image from "next/image";

import { NavLinks } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
      <Link href="/">
        <Image src="/travello-logo.png" alt="logo" width={74} height={32} />
      </Link>
      <ul className="hidden h-full gap-10 lg:flex">
        {NavLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter
           cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        height={32}
        width={32}
        alt="hamburger"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
