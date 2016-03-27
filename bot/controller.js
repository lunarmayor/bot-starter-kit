import Botkit from 'botkit'
import redisStorage from 'botkit-storage-redis'
import WitMiddleware from './middleware/WitMiddleware'
import removeFormatting from './middleware/removeFormatting'
import BeepBoop from 'beepboop-botkit'
import dotenv from 'dotenv'

// env variables
dotenv.config()

const storage = redisStorage({})
const controller = Botkit.slackbot({ storage })

// apply middleware
const { hears, receive } = WitMiddleware(process.env.WIT_TOKEN)
controller.middleware.receive.use([receive, removeFormatting])
controller.middleware.hears.use(hears)

const beepboop = BeepBoop.start(controller, { debug: false })

export default controller
