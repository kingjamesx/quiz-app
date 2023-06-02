import Qualities from '@/components/home-page/Qualities';
import HeaderHero from '@/components/home-page/layout/Header-Hero';
import HomeLayout from '@/components/home-page/layout/home-layout';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <HomeLayout>
      <HeaderHero />
      <Qualities />
      <Footer />
    </HomeLayout>
  );
}
