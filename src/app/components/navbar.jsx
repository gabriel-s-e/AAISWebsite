import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/FAQ">FAQs</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}