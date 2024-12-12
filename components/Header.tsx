import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 z-50 border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif italic text-white">
            Museum Restaurant
          </Link>
          <ul className="hidden md:flex space-x-6 text-blue-500">
            {[
              "Home",
              "Menu",
              "Recipes",
              "Chef's Table",
              "About",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={
                    item.toLowerCase() === "home"
                      ? "/"
                      : `/${item
                          .toLowerCase()
                          .replace("'", "")
                          .replace(" ", "-")}`
                  }
                  className="text-white hover:text-secondary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            asChild
            // variant="outline"
            className="bg-secondary hidden md:inline-flex border-white text-olive hover:bg-white hover:text-olive"
          >
            <Link href="/booking">Reserve a Table</Link>
          </Button>
          <Button className="md:hidden" variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
