const removeFormatting = (bot, message, next) => {
  if (message.text) {
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
    next()
  } else {
    next()
  }
}

export default removeFormatting
