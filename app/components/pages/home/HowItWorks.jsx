const steps = [
  {
    number: "01",
    title: "Choose your Plan",
    description:
      "Select from our daily, weekly, or monthly meal plans that suit your needs.",
  },
  {
    number: "02",
    title: "Place your order",
    description:
      "Contact us via WhatsApp or fill out the inquiry form with your preferences.",
  },
  {
    number: "03",
    title: "Enjoy your meal",
    description:
      "Receive your freshly prepared meals at your doorstep and enjoy!",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-2">
          <p className="font-semibold uppercase text-primary">
            how it works
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl text-black">
            <span className="text-primary">Home Made Food</span> Delivered <br /> To Your Doorstep
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Getting a homemade cake delivered is easier than you think. Three
            steps, zero stress.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:bg-cream/10 hover:shadow-[0_20px_45px_rgba(201,169,98,0.18)] text-center"
            >
              <span className="text-4xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-black">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
