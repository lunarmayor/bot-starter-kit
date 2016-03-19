const sayWithTyping = (bot, convo,  message, text) => {
  let typingLength = 500 / 60 * text.length

  bot.reply(message, { type: 'typing' });

  setTimeout(() => {
    convo.say(text)
  }, typingLength)
}

export default sayWithTyping
