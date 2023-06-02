import { useRouter } from 'next/router';
import { QUESTIONS } from '../../helpers/question-bank';

export const ButtonLabel = page => {
  let label = 'Next';

  if (page === QUESTIONS.length) label = 'Submit';

  return label;
};

export const switchPage = (page, setPage, answers) => {
  if (page !== QUESTIONS.length) setPage(page + 1);
  if (page === QUESTIONS.length) console.log(answers);
};
