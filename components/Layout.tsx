import React from "react"
import Head from "next/head"

function Layout({ name, profession, children }): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-gray-200 dark:bg-black">
      <Head>
        <meta key="charset" charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta
          key="description"
          name="description"
          content="My name is Jose G Perez Taveras and I am a Software Engineer"
        />
        <meta key="author" name="author" content="Jose G Perez Taveras" />
        <meta
          key="keywords"
          name="keywords"
          content="HTML,CSS,XML,JavaScript,Node,Docker,C++,Java,Python,GoLang,Haskell"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="theme-color" name="theme-color" content="#D0021B" />
        <meta
          property="og:title"
          content={`${name} &mdash; ${profession}`}
          key="title"
        />
        <title>
          {name} &mdash; {profession}
        </title>
      </Head>
      {children}
    </div>
  )
}

export default Layout
