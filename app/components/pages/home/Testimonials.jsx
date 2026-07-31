const reviews = [
  {
    quote:
      "The birthday cake for my daughter was absolutely stunning — and tasted even better than it looked. You can tell it's made with real love.",
    name: "Sarah M.",
    occasion: "Birthday party",
  },
  {
    quote:
      "Ordered a custom wedding cake and they nailed every detail. Our guests couldn't stop asking where we got it from!",
    name: "James & Priya",
    occasion: "Wedding",
  },
  {
    quote:
      "Finally found a baker who does proper homemade cakes. The lemon drizzle is my weekly treat now. Delivery is always on time.",
    name: "Emily R.",
    occasion: "Regular customer",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-blush/20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-chocolate sm:text-4xl">
            What our customers say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-4 text-gold" aria-hidden="true">
                ★★★★★
              </div>
              <p className="flex-1 leading-relaxed text-chocolate/75">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-blush/30 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-chocolate">
                    {review.name}
                  </span>
                  <span className="block text-sm text-chocolate/50">
                    {review.occasion}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
