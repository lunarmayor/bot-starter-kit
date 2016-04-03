import controller from '../controller'
import { all } from './mentionTypes'
import wit from '../middleware/wit'
import replyWithTyping from './replyWithTyping'
import { sample } from 'lodash'

const hears = (triggers, responses, mentionTypes = all) => {
  controller.hears(triggers, mentionTypes, wit.hears, (bot, message) => {
    replyWithTyping(bot, message, sample(responses))
  })
}

export default hears
