import Botkit from 'botkit'
import mongoStorage from 'botkit-storage-mongo'
import BeepBoop from 'beepboop-botkit'
import dotenv from 'dotenv'

// load .env config
dotenv.config()

const storage = mongoStorage({ mongoUri: process.env.MONGO_URL })
const BotController = Botkit.slackbot({ storage })
//const beepboop = BeepBoop.start(BotController, { debug: true })

const startBot = (bot, { createdBy }) => {
  bot.startRTM(() => {
    bot.startPrivateConversation({ user: createdBy }, (err, convo) => {
      convo.say('Hey I\'m Pam!')
      convo.say('/invite me to a channel so I can get to work')
    })

    trackbot(bot)
  })
}

const syncUsers = (bot) => {
  bot.api.user.list({}, (err, { members }) => {
    members.map(BotController.storage.users.save)
  })
}

let bots = {}
const trackBot = bot => bots[bot.config.token] = bot

const spawnBots = (err, teams) => {
  console.log(teams)
}

const createEndpoints = (err, webserver) => {
  BotController
    .createHomepageEndpoint(webserver)
    .createOauthEndpoints(webserver)
}

// to be replaced by beep boop
BotController
  .configureSlackApp({
    scopes: ['bot'],
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_ID,
    redirect_uri: 'http://localhost:3002',
  })
  .setupWebserver(3001, createEndpoints)
  .on('create_bot', startBot)
  .storage.teams.all(spawnBots)
