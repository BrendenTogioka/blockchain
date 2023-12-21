import Image from "next/image";
import logo from "@/public/images/solanalogo.png";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center py-12 border-t">
        <Image src={logo} alt="Solana logo" />
      </div>
    </footer>
  );
}
