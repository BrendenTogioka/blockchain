import Image from "next/image";
import logo from "@/public/images/solanalogo.png";

export default function Navbar() {
  return (
    <header className="w-screen bg-black/[0.6]">
      <nav className="flex justify-between max-w-[1100px] px-6 py-4">
        <Image src={logo} alt="Solana logo" />
        <ul className="flex gap-4">
          <li>Learn</li>
          <li>Build</li>
          <li>Network</li>
          <li>Community</li>
        </ul>
      </nav>
    </header>
  );
}
