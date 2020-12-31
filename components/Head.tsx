import NextHead from "next/head"

const Head = () => (
  <NextHead>
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
      content="Jose G &mdash; software engineer"
      key="title"
    />
    <title>Jose G &mdash; software engineer</title>
  </NextHead>
)

export default Head
