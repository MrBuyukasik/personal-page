import type { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../../styles/theme/ThemeProvider";
import "../../styles/tailwind.css";
import GlobalStyle from "../../styles/theme/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Personal website - Hasan Can Buyukasik</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
