import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl  font-bold mb-4">Restaurant Gallary</h3>
            <p className="text-sm">
              Experience culinary art in a museum-inspired setting
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-secondary transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-secondary transition-colors"
                >
                  Book a Table
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-secondary transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>123 Art Street, Culinary City</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@museumrestaurant.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 Restaurant Gallary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
