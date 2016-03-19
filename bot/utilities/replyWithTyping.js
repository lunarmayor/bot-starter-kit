const replyWithTyping = (bot, message, text) => {
  let typingLength = 1200 / 60 * text.length
  typingLength = typingLength > 2000 ? 2000 : typingLength

  bot.reply(message, { type: 'typing' });

  setTimeout(() => {
    bot.reply(message, text)
  }, typingLength)
}

export default replyWithTyping
