import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow ">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1593908717414-78a92b700feb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat ">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center text-white ">
            <h1 className="font-serif italic text-5xl md:text-7xl mb-4">
              Culinary Artistry
            </h1>
            <p className="text-xl mb-8">Experience dining as a work of art</p>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-serif italic text-4xl text-primary text-center mb-12">
              Featured Masterpieces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Impressionist's Seafood Platter",
                  image:
                    "https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  name: "Cubist's Steak",
                  image:
                    "https://images.unsplash.com/photo-1683315445782-48b2459c234d?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  name: "Surrealist Soufflé",
                  image:
                    "https://images.unsplash.com/photo-1579711220373-155ffc441b36?q=80&w=2070&auto=format&fit=crop",
                },
              ].map((dish) => (
                <div
                  key={dish.name}
                  className="bg-card rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={400}
                    height={300}
                    className="w-full h-68 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-serif text-center italic text-xl text-olive">
                      {dish.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="font-serif italic text-4xl text-primary mb-4">
                  Our Culinary Canvas
                </h2>
                <p className="text-muted-foreground mb-6">
                  At Museum Restaurant, we blend the artistry of cooking with
                  the aesthetics of fine dining. Each dish is a masterpiece,
                  crafted to delight both your palate and your eyes.
                </p>
                <Button asChild variant="outline">
                  <Link href="/about">Discover Our Story</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                  alt="Chef preparing a dish"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
