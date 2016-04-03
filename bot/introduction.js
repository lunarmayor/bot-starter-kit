import controller from './controller'
import replyWithTyping from './utilities/replyWithTyping'

controller
  .on('create_bot', (bot, config) => {
    console.log(config)
    bot.startPrivateConversation({ user: config.createdBy }, (err, convo) => {
      convo.say('Hey I\'m ollie!')
      convo.say('/invite me to a channel so I can get to work!')
    })
  })
  .on('bot_channel_join', (bot, message) => {
    replyWithTyping(bot, message, 'Hi! Here to help!')
  })

