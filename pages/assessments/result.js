import AssessmentLayout from '@/components/Assessments/layout';
import Breakdown from '@/components/Assessments/result/breakdown/breakdown';
import Recommendations from '@/components/Assessments/result/recommendations/recommendations';
import Score from '@/components/Assessments/result/score';
import Footer from '@/components/layout/Footer';

const ResultPage = () => {
  return (
    <AssessmentLayout>
      <Score />
      <Breakdown />
      <Recommendations />
      <Footer />
    </AssessmentLayout>
  );
};

export default ResultPage;
