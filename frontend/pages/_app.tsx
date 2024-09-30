import "../styles/globals.css";

import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { RelayEnvironmentProvider } from "react-relay";

import { Header } from "components/common/Header";
import { PageLoadProgressBar } from "components/modules/PageLoadProgressBar";
import { Footer } from "components/common/Footer";
import { useRelayEnvironment } from "libs/graphql/environment";

function MyApp({ Component, pageProps }: AppProps) {
  const relayEnvironment = useRelayEnvironment(pageProps.initialRecords);
  return (
    <ThemeProvider storageKey="MIDENSCAN_THEME" attribute="class">
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <meta name="coinzilla" content="41146f23c0d51000ae733c4928c92bbb" />
          <link rel="shortcut icon" href="/img/miden.ico" />
          <title>Midenscan - Polygon Miden Block Explorer</title>
          <meta
            name="description"
            content="Midenscan is a next-generation block explorer on Polygon Miden. A rollup for high-throughput, private applications."
          />
        </Head>
        <div className="dark:bg-darkBg min-h-screen">
          <Header />
          <PageLoadProgressBar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
}

export default MyApp;
