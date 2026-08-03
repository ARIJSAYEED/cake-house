const features = [
  {
    title: "Veg / Non-Veg Options",
    description:
      "Choose meals that fit your preference — pure vegetarian or non-veg options, prepared separately with care.",
    variant: "light",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c-1.5 2.5-4 5.5-4 9a4 4 0 0 0 8 0c0-3.5-2.5-6.5-4-9Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
      </svg>
    ),
  },
  {
    title: "Hygiene First",
    description:
      "Every dish is cooked in a clean home kitchen with sanitized utensils and fresh ingredients every single day.",
    variant: "primary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3 4 7v5c0 5 3.5 9 8 10 4.5-1 8-5 8-10V7l-8-4Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Weekly Menu",
    description:
      "A new menu every week so you never get bored — seasonal specials and homestyle favourites on rotation.",
    variant: "primary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
        <path strokeLinecap="round" d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Local Delivery",
    description:
      "Hot, fresh tiffins delivered right to your doorstep across the neighbourhood, on time every day.",
    variant: "light",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h11v8H3V7Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 10h4l2 3v2h-6v-5Z"
        />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
];

export default function WhyChooseMe() {
  return (
    <section className="bg-white py-20 border-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-20">
        <div className="max-w-md shrink-0">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Menu
          </p>
          <h2 className="mt-2 text-4xl font-semibold capitalize text-black">
            Why choose{" "}
            <span className="text-primary">
              my <br />
              kitchen
            </span>
          </h2>
          <p className="mt-4 leading-relaxed text-black/65">
            At My Kitchen, we take pride in delivering not just food, but an
            experience that reminds you of home. Handcrafted daily in our home
            kitchen, our tiffins bring you fresh, wholesome meals with
            ever-changing menus to delight your taste buds.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => {
            const isPrimary = feature.variant === "primary";

            return (
              <article
                key={feature.title}
                className={`rounded-2xl p-6 ${
                  isPrimary
                    ? "bg-primary text-white"
                    : "bg-white text-black shadow-sm ring-1 ring-black/5"
                }`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                    isPrimary ? "bg-white/15" : "bg-primary/10 text-primary"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isPrimary ? "text-white/85" : "text-black/65"
                  }`}
                >
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
