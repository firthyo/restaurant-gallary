import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[var(--olive-green)] text-[var(--soft-cream)] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Museum Restaurant</h3>
            <p>Experience culinary art in a museum-inspired setting</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li><Link href="/menu" className="hover:text-[var(--rust-orange)] transition-colors">Menu</Link></li>
              <li><Link href="/booking" className="hover:text-[var(--rust-orange)] transition-colors">Book a Table</Link></li>
              <li><Link href="/events" className="hover:text-[var(--rust-orange)] transition-colors">Events</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>123 Art Street, Culinary City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@museumrestaurant.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[var(--rust-orange)] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[var(--rust-orange)] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[var(--rust-orange)] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Museum Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

