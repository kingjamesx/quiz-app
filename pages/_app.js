import OverallLayout from '@/components/layout/overall-layout';
import '@/styles/globals.css';
import Head from 'next/head';
import ogImage from '../public/images/home-page.png';

export default function App({ Component, pageProps }) {
  return (
    <OverallLayout>
      <Head>
        <meta
          property="og:image"
          content="https://i.ibb.co/X88hnGb/Screenshot-2023-05-30-at-21-18-05-https-awaskill-vercel-app.png"
        />
        <link rel="icon" href="/images/logo-icon.png" />
      </Head>
      <Component {...pageProps} />
    </OverallLayout>
  );
}
