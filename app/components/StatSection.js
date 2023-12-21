const stats = [
  { stat: "11.5M+", label: "active accounts" },
  { stat: "$0.00025", label: "avg cost per transaction" },
  { stat: "21.9M", label: "nfts minted" },
];

export default function StatSection() {
  return (
    <section className="py-12 z-10 relative">
      <div className="">
        <h2 className="text-3xl text-center mb-4">
          Join a community
          <br />
          of millions
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {stat.stat}
              </h3>
              <h4 className="text-xs uppercase">{stat.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
