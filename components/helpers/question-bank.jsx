export const QUESTIONS = [
  {
    id: 1,
    prompts: 'How much do you know of tech?',
    options: [
      { id: 'A', option: 'I’ve built a simple/ small project' },
      { id: 'B', option: 'I, have basic some technical skills' },
      { id: 'C', option: 'I just know their names' },
      { id: 'D', option: 'I have no idea' },
    ],
  },
  {
    id: 2,
    prompts: 'What languages/programs do you know?',
    instruction: 'Select all that apply',
    options: [
      { id: 'A', option: 'HTML' },
      { id: 'B', option: 'CSS' },
      { id: 'C', option: 'Javascript' },
      { id: 'D', option: 'Python' },
      { id: 'E', option: 'UI' },
      { id: 'F', option: 'Adobe suite' },
      { id: 'G', option: 'Webflow Bubble Wordpress' },
      { id: 'H', option: 'Excel' },
      { id: 'I', option: 'Ruby' },
      { id: 'J', option: 'Vue' },
      { id: 'K', option: 'React' },
      { id: 'L', option: 'PHP' },
    ],
  },
  {
    id: 3,
    prompts: 'What’s your favourite thing to do for fun?',
    options: [
      { id: 'A', option: 'Movies' },
      { id: 'B', option: 'Video games' },
      { id: 'C', option: 'Reading/ Writing' },
      { id: 'D', option: 'Boardgames/ Puzzles' },
    ],
  },
  {
    id: 4,
    prompts: 'How passionate are you about technology?',
    // from: 'Completely',
    // to: 'Hardly',
  },
  {
    id: 5,
    prompts: 'What’s your process when carrying out tasks?',
    options: [
      {
        A: 'Take lots of breaks in between',
        B: 'Do them one by one till I’m done',
      },
    ],
  },
];
