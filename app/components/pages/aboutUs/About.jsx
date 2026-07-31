import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&q=80"
                alt="Baker decorating a cake"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586985289688-d3bdb0f1b7b0?w=500&q=80"
                alt="Fresh ingredients for baking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl bg-chocolate px-6 py-4 text-center text-cream shadow-lg">
            <p className="text-2xl font-bold">
              Since 2018
            </p>
            <p className="text-sm text-cream/80">Baking from our home kitchen</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Story
          </p>
          <h2 className="mt-2 text-3xl font-bold text-chocolate sm:text-4xl">
            A home kitchen with a big heart
          </h2>
          <p className="mt-6 leading-relaxed text-chocolate/70">
            Cake House started in a small apartment kitchen with one goal: make
            cakes that feel personal. What began as birthday gifts for friends
            grew into a neighbourhood favourite — and now we deliver
            handcrafted treats across the city.
          </p>
          <p className="mt-4 leading-relaxed text-chocolate/70">
            We never use shortcuts. No premixes, no artificial flavours. Just
            real ingredients, time-honoured techniques, and the kind of care
            you can only get from a home baker who treats every order like
            it&apos;s for family.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "100% homemade — baked fresh for every order",
              "Custom designs for weddings, birthdays & events",
              "Allergen-friendly options available on request",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                  ✓
                </span>
                <span className="text-chocolate/75">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
