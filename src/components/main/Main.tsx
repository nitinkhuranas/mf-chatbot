import styles from './Main.module.css'


export default function Main({ Component, pageProps }) {
  return (
    <div className={styles.main}>
      <Component {...pageProps} />
    </div>
  )
}