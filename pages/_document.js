import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Home</title>
      </Head>
      <body>
        <div id="overlay"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
