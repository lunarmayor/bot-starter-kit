import controller from './controller'

controller
  .on('create_bot', (bot, { createdBy }) => {
    console.log(createdBy)
    console.log(bot)
    bot.startPrivateConversation({ user: createdBy }, (err, convo) => {
      convo.say('Hey I\'m ollie!')
      convo.say('/invite me to a channel so I can get to work!')
    })
  })
  .on('bot_channel_joined', (bot, message) => {
    bot.reply(message, 'Hi! Here to help!')
  })

