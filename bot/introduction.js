import controller from './controller'

controller
  .on('create_team', (bot, config) => {
    bot.startPrivateConversation({ user: config.createdBy }, (err, convo) => {
      convo.say('Hi!')
      convo.say('/invite me to a channel so I can get to work!!')
    })

    syncUsers(bot)
  })
  .on('create_user', (bot, user) => {
    controller.storage.users.save(user)
  })
  .on('update_user', (bot, user) => {
    controller.storage.users.save(user)
  })

const syncUsers = (bot) => {
  bot.api.users.list({}, (err, { members }) => {
    members.map(controller.storage.users.save)
  })
}

