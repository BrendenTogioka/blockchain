import Image from "next/image";
import heroBg from "@/public/images/hero-bg.png";

import secondBg from "@/public/images/second-bg.png";

import StatSection from "./components/StatSection";
import FeaturesSection from "./components/FeaturesSection";
import SocialProof from "./components/SocialProof";
import CommunitySection from "./components/CommunitySection";
import GrowthSection from "./components/GrowthSection";

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col px-6 justify-between items-center text-center py-32">
        <div className="z-10 flex flex-col gap-5  justify-center items-center">
          <h1 className="text-4xl sm:text-5xl font-black">
            Powerful for developers.
            <br />
            Fast for everyone.
          </h1>
          <p className=" sm:max-w-[600px] text-base sm:text-lg ">
            Bring blockchain to the people. Solana supports experiences for
            power users, new consumers, and everyone in between.
          </p>
          <div className="flex gap-4 text-base sm:text-lg">
            <button
              type="button"
              className="py-2 px-4 bg-gradient-to-r from-indigo-500 hover:from-indigo-500/[0] hover:to-indigo-500 rounded-full"
            >
              Start Building
            </button>
            <button
              type="button"
              className="py-2 px-4 border border-white hover:bg-indigo-900/[0.6]  rounded-full"
            >
              Read Docs
            </button>
          </div>
        </div>

        <Image
          src={heroBg}
          alt=""
          priority
          className="absolute top-0 left-0 z-0 h-[50vh] object-cover object-right sm:object-center"
        />
      </section>

      <SocialProof />

      <div className="relative mt-32">
        <StatSection />

        <FeaturesSection />
        <Image
          src={secondBg}
          alt="second bg"
          className="absolute top-0 left-0 z-0 object-cover"
        />
      </div>

      <GrowthSection />

      <CommunitySection />
    </div>
  );
}
