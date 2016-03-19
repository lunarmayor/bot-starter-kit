const startTyping = (bot, message) => {
  bot.reply(message, {type: 'typing'})
}

export default startTyping
