import Image from "next/image";
import proof1 from "@/public/images/proof1.png";
import proof2 from "@/public/images/proof2.png";
import proof3 from "@/public/images/proof3.png";
import proof4 from "@/public/images/proof4.png";
import proof5 from "@/public/images/proof5.png";
import proof6 from "@/public/images/proof6.png";
import proof7 from "@/public/images/proof7.png";

export default function SocialProof() {
  return (
    <section>
      <h3 className="px-6 mb-4 text-indigo-500 font-medium text-center">
        Powering tools and integrations from companies all around the world
      </h3>
      <div className="sm:flex sm:justify-center sm:items-center">
        <div className="grid grid-cols-4 place-items-center mb-4 sm:mb-0 sm:gap-2">
          <Image src={proof1} alt="proof 1" className="w-[90px]" />
          <Image src={proof2} alt="proof 2" className="w-[90px]" />
          <Image src={proof3} alt="proof 3" className="w-[90px]" />
          <Image src={proof4} alt="proof 4" className="w-[90px]" />
        </div>
        <div className="grid grid-cols-3  place-items-center sm:gap-2">
          <Image src={proof5} alt="proof 5" className="w-[90px]" />
          <Image src={proof6} alt="proof 6" className="w-[90px]" />

          <Image src={proof7} alt="proof 7" className="w-[90px]" />
        </div>
      </div>
    </section>
  );
}
