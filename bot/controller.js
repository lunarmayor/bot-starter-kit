import Botkit from 'botkit'
import mongoStorage from 'botkit-storage-mongo'
import BeepBoop from 'beepboop-botkit'
import dotenv from 'dotenv'

dotenv.config()

const storage = mongoStorage({ mongoUri: process.env.MONGO_URL })
const controller = Botkit.slackbot({ storage })
const beepboop = BeepBoop.start(controller, { debug: true })

export default controller
