import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Fonts</title>
          <meta name="description" content="Fonts" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/LXGWWenKai.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/JCYuanTi.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
          <link rel="stylesheet" href="https://cdn-oss.soapphoto.com/fonts/Yozai.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css" />
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
