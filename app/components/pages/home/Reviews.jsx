import Image from "next/image";

const Reviews = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-primary/5 lg:min-h-112">
          <Image
            fill
            src="/chef.png"
            alt="Our home chef"
            className="object-contain object-center p-8"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What they say
            </p>
            <h2 className="mt-2 text-4xl font-semibold capitalize">
              What <span className="text-primary">our customers</span> say
              <br />
              about us
            </h2>
          </div>
          <div>{/* review card */}</div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
