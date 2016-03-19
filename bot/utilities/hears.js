import controller from '../controller'
import { all } from './mentionTypes'
import replaceName from './replaceName'
import sample from './sample'
import replyWithTyping from './replyWithTyping'

const hears = (triggers, responses, mentionTypes = all) => {
  controller.hears(triggers, mentionTypes, (bot, message) => {
    replaceName(message, sample(responses), (result) => {
      replyWithTyping(bot, message, result)
    })
  })
}

export default hears
