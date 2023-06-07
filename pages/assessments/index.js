import AssessmentLayout from '@/components/Assessments/layout';
import AssessmentMain from '@/components/Assessments/main/main';
import Head from 'next/head';

const Assessments = () => {
  return (
    <>
      <Head>
        <title>Awaskill || Assessments</title>
        <meta property="og:image" content="/images/home-page.png" />
        <meta name="description" content="Start Awaskill Test" />
      </Head>
      <AssessmentLayout>
        <AssessmentMain />
      </AssessmentLayout>
    </>
  );
};

export default Assessments;
