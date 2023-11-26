import Link from 'next/link';

export default function Tabs() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shops">Shops</Link>
        </li>
        <li>
          <Link href="/offers">Offers</Link>
        </li>
      </ul>
    </nav>
  )
}