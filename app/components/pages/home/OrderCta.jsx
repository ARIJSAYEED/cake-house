import Link from "next/link";

export default function OrderCta() {
  return (
    <section id="order" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary to-80% px-8 py-16 text-center text-white shadow-2xl shadow-primary/20 sm:px-16">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready for something sweet?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/85">
              Place your order today and we&apos;ll have a fresh, homemade cake
              at your doorstep within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#cakes"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-chocolate transition hover:bg-cream"
              >
                Start Your Order
              </Link>
              <a
                href="mailto:hello@cakehouse.com"
                className="rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                hello@cakehouse.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
