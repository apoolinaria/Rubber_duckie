module.exports.advise = [
  { id: 2, text: 'Try to put another console.log', topic: 'general' },
  {
    id: 7,
    text: 'Can you explain what your function suppose to do?',
    topic: 'general',
  },
  { id: 14, text: 'Maybe there is a comma missing?', topic: 'general' },
  { id: 15, text: 'Any misspelled variable names?', topic: 'general' },
  { id: 16, text: 'Variables with similar names confused?', topic: 'general' },
  { id: 18, text: 'Import statements correct?', topic: 'general' },
  {
    id: 19,
    text: 'Use of single quotes when double quotes required?',
    topic: 'general',
  },
  { id: 1, text: 'Have you read your error massage fully?', topic: 'error' },
  { id: 3, text: 'Google your error code', topic: 'error' },
  { id: 4, text: 'Comment your recent changes out, and confirm your bug' },
  { id: 5, text: 'Has it been more than 30 min? Step aside. Go on a walk' },
  { id: 6, text: 'Comment your recent changes out, and confirm your bug' },
  {
    id: 8,
    text:
      'Any chance that your function can be broken into smaller parts that you could test seperately?',
    topic: 'function',
  },
  {
    id: 9,
    text: 'What parts of your function work, and where are your "unknowns"?',
    topic: 'function',
  },
  {
    id: 10,
    text:
      'Could your function , or variables within it, be somehow overwritten or overridden?',
    topic: 'function',
  },
  { id: 11, text: 'Why do you need your function?', topic: 'function' },
  {
    id: 12,
    text: 'Do you fully understand how your function does what it does?',
    topic: 'function',
  },
  {
    id: 13,
    text: 'Could you split your function into smaller chunks?',
    topic: 'function',
  },
  { id: 17, text: '= used instead of ==?', topic: 'comparison' },
  { id: 20, text: 'Did you paste any code? Check there!', topic: 'comparison' },
  { id: 21, text: 'Can you take a different aproach?', topic: 'suggestion' },
];

// if more than 11 clicks Sorry, my super-duck-powers have failed. Have you tried google or stack overflow?
