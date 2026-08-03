import { ArrowRight } from "lucide-react";
import Image from "next/image";

const cakes = [
  {
    name: "Classic Chocolate",
    description: "Rich cocoa layers with silky ganache",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Best Seller",
  },
  {
    name: "Strawberry Shortcake",
    description: "Fresh berries, whipped cream, vanilla sponge",
    price: "$34",
    image:
      "https://images.unsplash.com/photo-1611293388250-580b08c4a145?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Seasonal",
  },
  {
    name: "Birthday Celebration",
    description: "Colourful buttercream, sprinkles, joy",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Popular",
  },
];

export default function FeaturedCakes() {
  return (
    <section id="cakes" className="bg-primary/10 py-20 space-y-10 flex flex-col justify-center items-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold capitalize text-center">our <span className="text-primary">featured</span> meals</h1>
        <p className="text-neutral-600">Discover our most loved dishes that keep our customers coming back for more.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {
          cakes.map((cake, i) => (
            <div key={i} className="space-y-4 rounded-lg bg-white p-1">
              <div className="relative w-full h-52 overflow-hidden rounded-lg">
                <Image className="object-cover rounded-lg" fill src={cake.image} alt={cake.name}></Image>
              </div>
              <div className="space-y-4  p-4">
                <div>
                  <h1 className="text-lg font-semibold">{cake.name}</h1>
                  <p className="text-sm text-neutral-600">{cake.description}</p>
                </div>
                <button className="px-4 py-1 border capitalize rounded-full text-primary cursor-pointer font-semibold hover:bg-primary hover:text-white">view details <ArrowRight size={20} className="inline"></ArrowRight></button>
              </div>
            </div>
          ))
        }

      </div>
      <div>
        <button className="capitalize px-8 py-4 bg-primary text-white rounded-full text-lg cursor-pointer">check out full menu list <ArrowRight size={20} className="inline"></ArrowRight></button>
      </div>
    </section>
  );
}
