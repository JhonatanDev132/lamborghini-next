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
      <meta name="author" content="Jhonatan Vinicius" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}