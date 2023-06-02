import Header from '@/components/layout/Header';

const AssessmentLayout = props => {
  const { children } = props;
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default AssessmentLayout;
