import { AppProps } from "next/app"

import "../styles/globals.css"
import useMenu from "../hooks/useMenu"
import Layout from "../components/Layout"

const App = ({ Component, pageProps }: AppProps) => {
  const menu = useMenu()

  return (
    <Layout {...menu}>
      <Component {...menu} {...pageProps} />
    </Layout>
  )
}

export default App
