import hears from './utilities/hears'

// map for simple responses
const responseMap = [
  {
    intent: 'hello',
    responses: [
      ':simple_smile: :wave: hello!',
      ':wave: :wave: :wave: :wave: :wave: :wave: :wave: i have so many hands',
      'hello friend!',
      'hi...human',
      'i feel acknowledged',
      'hello :heart:!',
      'oh hey...',
      ':heart::heart::heart:',
      'hello [name]!',
      '[name]!!!!!'
    ],
  },
  {
    intent: 'bye',
    responses: [
      ':v',
      ':wave',
      'nooo! don\'t leave me!',
      'bye!!',
      'ok bye'
    ],
  },
  {
    intent: 'thank_you',
    responses: [
      ':simple_smile: you\'re welcome',
      'I appreciate being appeciated',
      'np friend! anything I can help with?',
      'glad to help!!'
    ],
  },
  {
    intent: 'love',
    responses: [
      ':heart:! I love you too [name]!',
      'I know.',
      'aww :simple_smile:',
      ':heart_eyes:',
      'I wish I could hug you'
    ],
  },
]

responseMap.map(({intent, responses}) => hears([intent], responses))
