import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Medium.png";
function Header() {
 

  return (
    // Wrapper
    <header className={`flex justify-center gap-10 p-1 bg-[#FCC017] sticky inset-0 z-50`}>
      {/* Content */}
      <div className={"max-w-7xl flex-1 flex justify-between gap-10"}>
        {/* Logo */}
        <div className={"flex items-center flex-start"}>
          <Link href={"/"} passHref>
            <Image src={Logo} height={70} width={200}    className={"cursor-pointer object-contain"} />
          </Link>
        </div>
        {/* Links */}
        <div className={"flex cursor-pointer items-center space-x-5 text-sm"}>
          <Link href={"/"}>Our story</Link>
          <Link href={"/"}>Membership</Link>
          <Link href={"/"}>Write</Link>
          <Link href={"/"}>Sign In</Link>
          {/* Get started button link */}
          <Link href={"/"} passHref>
            <span className="bg-black font-medium text-white px-4 py-2.5 rounded-3xl text-sm">
              Get started
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
