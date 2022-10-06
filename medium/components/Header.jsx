import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Medium.png";
function Header() {
 
const styles = {
  wrapper: `flex justify-center gap-10 p-1 bg-[#FCC017]`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: `flex items-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannerNav: `flex cursor-pointer items-center space-x-5 text-sm`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
}
  return (
    // Wrapper
    <header className={styles.wrapper}>
      {/* Content */}
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href={"/"} passHref>
            <Image src={Logo} height={70} width={200}    className={styles.logo} />
          </Link>
        </div>
        {/* Links */}
        <div className={styles.bannerNav}>
          <Link href={"/"}>Our story</Link>
          <Link href={"/"}>Membership</Link>
          <Link href={"/"}>Write</Link>
          <Link href={"/"}>Sign In</Link>
          {/* Special button link */}
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
