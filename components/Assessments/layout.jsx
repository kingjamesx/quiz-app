import Header from '@/components/layout/Header';

const AssessmentLayout = props => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AssessmentLayout;
