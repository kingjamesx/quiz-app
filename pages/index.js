import Qualities from '@/components/home-page/Qualities';
import Resources from '@/components/home-page/Resources';
import HeaderHero from '@/components/home-page/layout/Header-Hero';
import HomeLayout from '@/components/home-page/layout/home-layout';
import Footer from '@/components/layout/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Awaskill</title>
        {/* <meta property="og:image" content={'/images/home-page.png'} /> */}

        {/* <meta property="og:image" content="/images/home-page.png" /> */}
        <meta
          name="description"
          content="Unlock your tech career potential today"
        />
      </Head>
      <HomeLayout>
        <HeaderHero />
        <Qualities />
        <Resources />
        <Footer />
      </HomeLayout>
    </>
  );
}
