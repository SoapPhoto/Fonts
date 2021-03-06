import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <meta name="description" content="Fonts" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/LXGWWenKai.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/JCYuanTi.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/Yozai.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/OPPOSans.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
