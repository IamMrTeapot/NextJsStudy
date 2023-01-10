import "styles/globals.css";
import "styles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />);
  // }

  return (
    <>
      <Head>
        <title>Nextjs</title>
        <meta name="description" content="This framework is too Hard TT" />
        {/* the meta tag in index has higher priority */}
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
