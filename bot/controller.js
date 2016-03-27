import Botkit from 'botkit'
import redisStorage from 'botkit-storage-redis'
import WitMiddleware from './middleware/WitMiddleware'
import removeFormatting from './middleware/removeFormatting'
import BeepBoop from 'beepboop-botkit'
import dotenv from 'dotenv'

// env variables
dotenv.config()

const storage = redisStorage('redis://pub-redis-15683.us-east-1-3.4.ec2.garantiadata.com:15683')
const controller = Botkit.slackbot({ storage })

// apply middleware
const { hears, receive } = WitMiddleware(process.env.WIT_TOKEN)
controller.middleware.receive.use([receive, removeFormatting])
controller.middleware.hears.use(hears)

const beepboop = BeepBoop.start(controller, { debug: false })

controller
  .on('create_bot', (bot, config) => {
    console.log(bot)
  })

controller.storage.users.all((err, teams) => {
  console.log(teams)
})

export default controller
