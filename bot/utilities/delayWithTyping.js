const delayWithTyping = (bot, message, cb, time = 300) => {
  bot.reply(message, { type: 'typing' })
  setTimeout(cb, time)
}

export default delayWithTyping
