import wit from 'node-wit'

const witMiddleware = (token) => {
  var middleware = {}
  middleware.receive = function(bot, message, next) {
    if (message.text && !message.ok) {
      wit.captureTextIntent(token, message.text, function(err, res) {
        if (err) {
          next(err)
        } else {
          message.intents = res.outcomes
          next()
        }
      })
    } else {
      next()
    }
  }

  middleware.hears = function(bot, message, triggers, next) {
    if (!message.heard) {
      for (var t = 0; t < triggers.length; t++) {
        var trigger = triggers[t]
        var pattern = trigger.pattern
        if (typeof(pattern) == 'object' && pattern.intent && message.intents) {
          for (var i = 0; i < message.intents.length; i++) {
            var intent = message.intents[i]
            if (
              intent.intent === pattern.intent &&
              intent.confidence >= pattern.confidence
            ) {
              message.heard = true
              trigger.callback.apply(bot.botkit, [bot, message])
              break
            }
          }
        }
      }
    }
    next()
  }

  return middleware
}

export default witMiddleware
