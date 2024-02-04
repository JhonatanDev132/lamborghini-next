import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link
          rel="shortcut icon"
          href="/image/lamborghini.png"
          type="image/png"
          sizes="256x256"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Lamborghini" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lamborghini" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Jhonatan Vinicius" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}