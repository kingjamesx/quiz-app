import OverallLayout from '@/components/layout/overall-layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <OverallLayout>
      <Component {...pageProps} />
    </OverallLayout>
  );
}
