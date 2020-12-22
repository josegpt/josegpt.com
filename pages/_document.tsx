import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const { theme } = this.props.__NEXT_DATA__.props.pageProps

    return (
      <Html lang="en" className={theme}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
