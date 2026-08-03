import Link from "next/link";

const navLinks = [
  { href: "#cakes", label: "Our Cakes" },
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
];

export default function Header({ transparent = false }) {
  return (
    <header
      className={
        transparent
          ? "relative z-20 w-full bg-transparent"
          : "sticky top-0 z-50 border-b border-blush/40 bg-cream/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-white">
            🎂
          </span>
          <span
            className={`text-xl font-semibold tracking-tight ${
              transparent ? "text-white" : "text-chocolate"
            }`}
          >
            Cake House
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                transparent ? "text-white/80" : "text-chocolate/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#order"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
