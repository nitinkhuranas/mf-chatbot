import Tabs from '../tabs';
import styles from './Header.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
      <Tabs />
      <hr />
    </div>
  )
}