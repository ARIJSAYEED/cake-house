const steps = [
  {
    number: "01",
    title: "Choose your cake",
    description:
      "Browse our menu or tell us your dream design. Pick size, flavour, and any custom details.",
  },
  {
    number: "02",
    title: "We bake it fresh",
    description:
      "Your cake is made from scratch in our home kitchen, usually within 24–48 hours of your order.",
  },
  {
    number: "03",
    title: "Delivered to your door",
    description:
      "We hand-deliver your cake carefully packaged, so it arrives looking as good as it tastes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-chocolate py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Simple & Sweet
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            How ordering works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Getting a homemade cake delivered is easier than you think. Three
            steps, zero stress.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:bg-cream/10 hover:shadow-[0_20px_45px_rgba(201,169,98,0.18)]"
            >
              <span className="text-4xl font-bold text-gold/40">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
