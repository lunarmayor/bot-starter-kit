import controller from './controller'
import replyWithTyping from './utilities/replyWithTyping'

controller.on('bot_channel_join', (bot, message) => {
  replyWithTyping(bot, message, 'Hi! Here to help!')
})
