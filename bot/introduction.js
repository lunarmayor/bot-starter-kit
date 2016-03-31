import controller from './controller'

controller
  .on('bot_channel_join', (bot, message) => {
    console.log(bot, message)
    syncUsers(bot)
  })
  .on('create_user', (bot, user) => {
    syncUsers(bot)
  })
  .on('update_user', (bot, user) => {
    syncUsers(bot)
  })
  .on('update_team', (bot, team) => {
    syncUsers(bot)
    controller.storage.teams.save(team)
  })

const syncUsers = (bot) => {
  bot.api.users.list({}, (err, { members }) => {
    console.log(members)
    members.map(controller.storage.users.save)
  })
}

