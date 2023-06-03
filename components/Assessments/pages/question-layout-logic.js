import { QUESTIONS } from '../../helpers/question-bank';

export const ButtonLabel = page => {
  let label = 'Next';

  if (page === QUESTIONS.length) label = 'Submit';

  return label;
};
