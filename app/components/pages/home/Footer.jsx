import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blush/30 bg-cream py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
              🎂
            </span>
            <span className="text-lg font-semibold text-chocolate">
              Cake House
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-chocolate/60">
            <Link href="#cakes" className="hover:text-primary">
              Menu
            </Link>
            <Link href="#about" className="hover:text-primary">
              About
            </Link>
            <Link href="#how-it-works" className="hover:text-primary">
              Delivery
            </Link>
            <Link href="#order" className="hover:text-primary">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-chocolate/50">
            © {new Date().getFullYear()} Cake House. Baked with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
