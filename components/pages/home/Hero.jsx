"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Beautiful chocolate layer cake with frosting"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <Header transparent />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            Homemade with love, delivered fresh
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Freshly Cooked.{" "}
            <span className="text-primary">Lovingly Packed.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Experience the authentic taste of home-cooked meals delivered right
            to your doorstep in Oshawa. Healthy, delicious, and made with love.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.8 }}
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition"
            >
              <Link href="#cakes">Browse Our Cakes</Link>
            </motion.button>
          </div>
          {/* <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div>
              <dt className="text-2xl font-bold text-white">
                500+
              </dt>
              <dd className="mt-1 text-sm text-white/60">Happy customers</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-white">
                30+
              </dt>
              <dd className="mt-1 text-sm text-white/60">Cake flavours</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-white">
                4.9★
              </dt>
              <dd className="mt-1 text-sm text-white/60">Average rating</dd>
            </div>
          </dl> */}
        </div>
      </div>
    </section>
  );
}
