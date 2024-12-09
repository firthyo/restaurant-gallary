import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="font-serif text-5xl md:text-6xl italic text-primary mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-accent mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-accent mb-6">Visit Us</h2>
            <div className="space-y-4 text-foreground">
              <p>123 Art Street</p>
              <p>Culinary City, CC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@museumrestaurant.com</p>
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl text-primary mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-foreground">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday: 10:00 AM - 11:00 PM</li>
                <li>Sunday: 10:00 AM - 9:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

