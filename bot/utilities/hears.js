import controller from '../controller'
import { all } from './mentionTypes'
import wit from '../middleware/wit'
import replaceName from './replaceName'
import sample from './sample'
import replyWithTyping from './replyWithTyping'

const hears = (triggers, responses, mentionTypes = all) => {
  controller.hears(triggers, mentionTypes, wit.hears, (bot, message) => {
    replaceName(message, sample(responses), (result) => {
      replyWithTyping(bot, message, result)
    })
  })
}

export default hears
