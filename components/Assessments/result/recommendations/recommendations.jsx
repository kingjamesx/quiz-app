import {
  COMMUNITY,
  LEARNING_PLATFORMS,
} from '@/components/helpers/result-bank';
import Platforms from './platforms';

const learningPlatforms = {
  heading: 'Learning Platforms',
  description:
    'With thousands of courses and topics to choose from, here are some of the best platforms to start learning. They range from free to paid, so choose which suits your needs.',
  note: 'Note that some platforms have sessions, and are not open/available all the time',
};
const community = {
  heading: 'Community',
  description:
    'It can be hard to navigate the tech world when you’re new. Joining a like minded community of folks who are driven and determined will go a long way towards helping stay consistent, as well as being able to access resources and information about your respective field.',
};

const Recommendations = () => {
  return (
    <section className="bg-recommendations-pattern bg-no-repeat pl-12 pt-20">
      <h2 className="mb-5 text-[2.5rem] font-bold">Recommendations</h2>
      <Platforms
        heading={learningPlatforms.heading}
        description={learningPlatforms.description}
        note={learningPlatforms.note}
        platforms={LEARNING_PLATFORMS}
      />
      <Platforms
        heading={community.heading}
        description={community.description}
        platforms={COMMUNITY}
      />
    </section>
  );
};

export default Recommendations;
