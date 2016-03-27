import hears from './utilities/hears'

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
    intent: 'beer',
    responses: [
      'https://www.ou.org/life/files/Beer-Mug.jpg',
      ':beers:',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRw6i68J2T_vV1zCZXqqZpv6cwaoAjQRls5fz6SfZFPX2XjFc71'
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
  {
    intent: 'good_morning',
    responses: [
      'good morning [name]!',
      'top of the morning to you',
      ':coffee::simple_smile:',
      ':coffee::coffee::coffee: ---> :party_parrot:'
    ],
  },
  {
    intent: 'good_night',
    responses: [
      'good night [name]!',
      ':zzz::bed: <---- :walking:',
      '[name] ---> :bed:',
      '[name]:zzz::zzz::zzz:',
      ':bed:time?'
    ],
  },
  {
    intent: 'happy',
    responses: [
      ':simple_smile:',
      'wooo',
      '[name]!!',
      ':)'
    ],
  },
  {
    intent: 'haha',
    responses: [
      'I can be funny sometimes',
      'glad to make you laugh',
      '[name] gets me',
    ]
  },
]

responseMap.map(({intent, responses}) => hears([{intent: intent, confidence: 0.5}], responses))
