import AssessmentLayout from '@/components/Assessments/layout';
import Breakdown from '@/components/Assessments/result/breakdown/breakdown';
import Score from '@/components/Assessments/result/score';
import Footer from '@/components/layout/Footer';

const ResultPage = () => {
  return (
    <AssessmentLayout>
      <Score />
      <Breakdown />
      <Footer />
    </AssessmentLayout>
  );
};

export default ResultPage;
