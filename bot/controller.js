import Botkit from 'botkit'
import redisStorage from 'botkit-storage-redis'
import wit from './middleware/wit'
import removeFormatting from './middleware/removeFormatting'
import BeepBoop from 'beepboop-botkit'

// setup redis storage
const storage = redisStorage(process.env.REDIS_URL)

// setup botkit controller w/ custom storage
const controller = Botkit.slackbot({ storage })

// apply middleware
controller.middleware.receive.use([wit.receive, removeFormatting])

// connect to beepboop
const beepboop = BeepBoop.start(controller, { debug: false })

export default controller
