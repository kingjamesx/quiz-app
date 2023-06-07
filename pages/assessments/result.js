import AssessmentLayout from '@/components/Assessments/layout';
import Breakdown from '@/components/Assessments/result/breakdown/breakdown';
import Cta from '@/components/Assessments/result/cta';
import Recommendations from '@/components/Assessments/result/recommendations/recommendations';
import Retake from '@/components/Assessments/result/retake';
import Score from '@/components/Assessments/result/score';
import TotalResults from '@/components/Assessments/result/total-results/total-results';
import Footer from '@/components/layout/Footer';
import Head from 'next/head';

const ResultPage = () => {
  return (
    <AssessmentLayout>
      <Head>
        <title>Awaskill || Result</title>
        <meta property="og:image" content="/images/home-page.png" />
        <meta
          name="description"
          content="Here's your score - We wish you a great career ahead"
        />
      </Head>
      <Score />
      <Breakdown />
      <Recommendations />
      <TotalResults />
      <Retake />
      <Cta />
      <Footer />
    </AssessmentLayout>
  );
};

export default ResultPage;
