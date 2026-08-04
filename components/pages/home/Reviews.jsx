import Image from "next/image";

const Reviews = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/5 lg:aspect-auto">
            <Image
              src="/chef.png"
              alt="Our home chef preparing fresh cakes"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                What they say
              </p>
              <h2 className="mt-2 text-4xl font-semibold capitalize text-black">
                What <span className="text-primary">our customers</span> say
                <br />
                about us
              </h2>
            </div>
            <div className="mt-8">{/* review card */}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
