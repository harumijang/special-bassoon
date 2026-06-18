import ImageCard from "@/components/image_card";

const ProTips = () => {
  const tips = [
    { title: "The Sift", body: "Sift your dry ingredients twice to aerate the flour for a cloud-like crumb.", icon: "☁️" },
    { title: "The Bubble", body: "Wait for bubbles to form and pop on the surface before you flip. Only flip once!", icon: "🫧" },
    { title: "The Rest", body: "Let the batter rest for 10 minutes. This allows the gluten to relax for tenderness.", icon: "⏳" }
  ];

  return (
    <section className="w-full py-24 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-4xl font-serif text-stone-900">The Golden Rules</h2>
          <span className="h-px flex-grow bg-stone-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {tips.map((tip, idx) => (
            <div key={idx} className="group">
              <div className="text-5xl mb-6 transform group-hover:-rotate-12 transition-transform duration-300 inline-block">
                {tip.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4 font-serif">{tip.title}</h4>
              <p className="text-stone-600 leading-relaxed text-sm antialiased">
                {tip.body}
              </p>
            </div>
          ))}
          <ImageCard/>
        </div>
      </div>
    </section>
  );
};

export default ProTips;