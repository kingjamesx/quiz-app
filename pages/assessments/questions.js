import AssessmentLayout from '@/components/Assessments/layout';
import QuestionLayout from '@/components/Assessments/pages/question-layout';
import Head from 'next/head';

const Questions = () => {
  return (
    <>
      <Head>
        <title>Awaskill || Questions</title>
        <meta name="description" content="Answer the following questions" />
      </Head>
      <AssessmentLayout>
        <QuestionLayout />
      </AssessmentLayout>
    </>
  );
};

export default Questions;
