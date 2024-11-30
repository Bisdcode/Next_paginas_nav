"use client";

import Link from "next/link"

import { usePathname } from "next/navigation"

const Nav = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">Home</Link>
            </li>
            <li>
                <Link className={`link ${pathname === "/sobre" ? "active" : ""}`} href="/sobre">Sobre</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
