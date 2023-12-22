import Image from "next/image";
import logo from "@/public/images/solanalogo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-screen bg-black/[0.6] relative z-20">
      <nav className="flex justify-between max-w-[1100px] mx-auto px-6 py-4">
        <Image src={logo} alt="Solana logo" />
        <ul className="flex gap-4 font-semibold">
          <li>
            <Link href="#learn">Learn</Link>
          </li>
          <li>
            <Link href="#build">Build</Link>
          </li>
          <li>
            <Link href="#community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
