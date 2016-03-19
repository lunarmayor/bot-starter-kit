import Botkit from 'botkit'
import mongoStorage from 'botkit-storage-mongo'
import BeepBoop from 'beepboop-botkit'
import dotenv from 'dotenv'

// load .env config
dotenv.config()

const storage = mongoStorage({ mongoUri: process.env.MONGO_URL })
const BotController = Botkit.slackbot({ storage })
const beepboop = BeepBoop.start(BotController, { debug: true })
