import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Main from '@/components/main'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Main Component={Component} pageProps={pageProps} />
    </>
  )
}
