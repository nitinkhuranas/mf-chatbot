import Link from 'next/link';
import styles from './Tabs.module.css'

export default function Tabs() {
  return (
    <nav className={styles.tabs}>
      <div>
        <Link href="/dashboard">Home</Link>
      </div>
      <div>
        <Link href="/fundsList">Funds</Link>
      </div>
      <div>
        <Link href="/search">Search</Link>
      </div>
      <div>
        <Link href="/chat">Chat</Link>
      </div>
    </nav>
  )
}