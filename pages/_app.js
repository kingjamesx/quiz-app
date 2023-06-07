import OverallLayout from '@/components/layout/overall-layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <OverallLayout>
      <Head>
        <meta property="og:image" content="/images/home-page.png" />
        <link rel="icon" href="/images/logo-icon.png" />
      </Head>
      <Component {...pageProps} />
    </OverallLayout>
  );
}
