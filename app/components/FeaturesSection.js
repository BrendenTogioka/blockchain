const features = [
  {
    title: "Fast",
    description:
      "Don&apos;t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
    stat: "3,969",
    label: "transactions per second",
    color: "teal-500",
  },
  {
    title: "Scalable",
    description:
      "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
    stat: "163B",
    label: "total transactions",
    color: "indigo-500",
  },
  {
    title: "Decentralized",
    description:
      "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
    stat: "1,675",
    label: "validator nodes",
    color: "yellow-500",
  },
  {
    title: "Energy Efficient",
    description:
      "Solana&apos;s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
    stat: "0%",
    label: "net carbon impact",
    color: "green-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 px-6 z-10 relative">
      <div className="sm:flex">
        <div className="flex flex-col sm:w-[40vw] gap-1 items-center sm:items-start mb-4">
          <h2 className="text-3xl text-center sm:text-left">
            Made for
            <br />
            mass adoption
          </h2>
          <span className="uppercase text-xs">live data</span>
        </div>
        <div className="flex flex-col gap-4 justify-center sm:w-[60vw] sm:grid sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="text-left bg-black/[0.3] rounded-lg p-4 flex flex-col gap-2"
            >
              <h3
                className={`text-2xl border-l-2 border-${feature.color}  pl-2 mb-2`}
              >
                {feature.title}
              </h3>
              <p>{feature.description}</p>
              <span className="text-xl">{feature.stat}</span>
              <h4 className="text-xs uppercase">{feature.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
