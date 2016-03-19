const removeFormatting = (bot, message, next) => {
  let text = message.text

  text = text.replace(/<([@#!])?([^>|]+)(?:\|([^>]+))?>/, (m, type, link, label) => {
    switch(type) {
      case '@':
        if (label) {
          return label
        } else {
          return  `@${link}`
        }
      case '#':
        if (label) {
          return label
        } else {
          return `#${link}`
        }
      case '!':
        return `@${link}`
      default:
        return link
    }
  })

  message.text = text
  console.log(message.text)

  next()

}

export default removeFormatting
