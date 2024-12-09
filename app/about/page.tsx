"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, GlassWater, Utensils, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  {
    value: "2010",
    label: "Founded",
    icon: Award,
    description: "Established to deliver culinary excellence and artistry.",
  },
  {
    value: "25+",
    label: "Signature Dishes",
    icon: Utensils,
    description: "Crafted masterpieces that redefine fine dining.",
  },
  {
    value: "500+",
    label: "Wine Varieties",
    icon: GlassWater,
    description: "A diverse selection of wines to pair with every dish.",
  },
  {
    value: "100K+",
    label: "Guests Served",
    icon: Users,
    description: "Proudly hosting thousands of satisfied patrons annually.",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Our Beginning",
    description: "The year we started our journey toward culinary artistry.",
  },
  {
    year: "2015",
    title: "First Michelin Star",
    description: "Recognized for exceptional dining experiences.",
  },
  {
    year: "2018",
    title: "Art Program Launch",
    description: "Fusing visual art with the culinary world.",
  },
  {
    year: "2023",
    title: "Chef’s Table Experience",
    description: "An exclusive, immersive dining adventure for our guests.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden hero-bg">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1000&width=2000"
              alt="Restaurant Ambiance"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Discover the tale behind our passion for culinary art.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-primary pl-4 py-2"
                >
                  <div className="flex items-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary mr-2" />
                    <h2 className="text-3xl font-serif text-foreground">
                      {stat.value}
                    </h2>
                  </div>
                  <p className="text-lg font-medium text-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif italic text-primary">
                  Our Philosophy
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe in blending artistry with gastronomy, creating
                  unforgettable experiences.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Every dish tells a story of passion, creativity, and
                  excellence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=500&auto=format&fit=crop"
                  alt="Chef Preparing"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1724232550308-ce862f34a5bb?q=80&w=2127&auto=format&fit=crop"
                  alt="Plated Dish"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif italic text-center mb-16">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20" />
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <h3 className="text-2xl font-serif text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-serif text-xl z-10">
                      {item.year}
                    </div>
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif italic mb-6">Join Us</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience our passion for culinary artistry. Reserve your table
              today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/booking">Make Reservation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
