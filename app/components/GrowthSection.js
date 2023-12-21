import Image from "next/image";
import growthImg from "@/public/images/growth.png";

const tags = ["NFTs", "DeFi", "Payments", "Gaming", "DAOs"];

export default function GrowthSection() {
  return (
    <section className="flex flex-col gap-8 py-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl text-center ">Build for growth.</h2>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border border-indigo-500 rounded-lg p-2">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 sm:flex">
        <Image src={growthImg} alt="anybodies growth" />
        <div className="bg-[#1A1A1A] flex flex-col gap-3 p-6">
          <h3 className="text-xl font-bold">Anybodies</h3>
          <p>
            It&apos;s time to bridge the digital and physical. Anybodies helps
            established brands like Toys&apos;R&apos;Us connect real-life places
            and products with NFTs.
          </p>
          <span className="text-indigo-500">
            Learn more about NFTs on Solana
          </span>
        </div>
      </div>
    </section>
  );
}
