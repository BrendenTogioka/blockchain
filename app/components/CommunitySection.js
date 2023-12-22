import Image from "next/image";
import community1 from "@/public/images/community-1.png";
import community2 from "@/public/images/community-2.png";
import community3 from "@/public/images/community-3.png";
import community4 from "@/public/images/community-4.png";
import community5 from "@/public/images/community-5.png";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="px-6 py-10 flex flex-col gap-6 relative z-10 "
    >
      <h2 className="text-3xl text-center ">Join a thriving community.</h2>
      <div className="flex flex-col gap-4 md:gap-2 sm:grid sm:grid-cols-2 text-center md:grid-cols-6 md:grid-rows-2 md:object-cover">
        <div className="flex flex-col justify-center items-center gap-2 bg-[#1A1A1A] py-10 sm:px-6 md:col-span-1 md:row-span-1">
          <h3 className="text-3xl text-indigo-500">11,000</h3>
          <h4 className="text-xs uppercase">
            Solana Hacker House participants
          </h4>
        </div>

        <Image
          src={community1}
          alt="community 1"
          className="w-full  md:col-span-1 md:row-span-1 md:row-start-2 h-full object-cover"
        />
        <Image
          src={community2}
          alt="community 2"
          className="w-full  md:col-span-2  md:row-start-1 md:row-end-3 md:row-span-2 h-full object-cover"
        />
        <Image
          src={community3}
          alt="community 3"
          className="w-full md:col-span-1 md:row-span-1 h-full object-cover"
        />

        <div className="flex flex-col justify-center items-center gap-2 bg-[#1A1A1A] py-10 sm:px-6  md:col-span-1 md:row-span-1 md:col-start-4 h-full object-cover">
          <h3 className="text-3xl text-indigo-500">48,000</h3>
          <h4 className="text-xs uppercase">
            Developers building during Solana Hackathons
          </h4>
        </div>

        <Image
          src={community4}
          alt="community 4"
          className="w-full md:col-span-1 md:row-span-2 md:row-start-1 md:col-start-5 h-full object-cover"
        />
        <Image
          src={community5}
          alt="community 5"
          className="w-full  md:col-span-1 md:row-span-1 md:col-start-6 md:row-start-1 h-full object-cover"
        />

        <div className="flex flex-col justify-center items-center gap-2 bg-[#1A1A1A] py-10 sm:px-6  md:col-span-1 md:row-span-1 md:row-start-2 md:col-start-6">
          <h3 className="text-3xl text-indigo-500">3,800</h3>
          <h4 className="text-xs uppercase">
            Solana Breakpoint 2022 attendees
          </h4>
        </div>
      </div>
    </section>
  );
}
