import controller from '../controller'

const replaceName = (message, sample, cb) => {
  bot.storage.users.get(message.user, (err, user) => {
    if (user) {
      cb(sample.replace('[name]', user.profile.first_name || user.user))
    } else {
      cb(sample)
    }
  })
}

export default replaceName
