import "../../styles/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../../styles/theme/ThemeProvider";
import GlobalStyle from "../../styles/theme/GlobalStyle";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const baseUrl = "https://www.googletagmanager.com/gtag/js?id=G-YQ9ZTM79J0";
  return (
    <>
      <Head>
        <title>Personal website - Hasan Can Buyukasik</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="google-analytics" strategy="afterInteractive" src={baseUrl}>
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-YQ9ZTM79J0');`}
      </Script>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
