const fileToMessage = (file, teamId, channel, type = 'direct_message') => {
  return {
    type: 'message',
    channel: channel,
    user: file.user,
    team: teamId,
    event: type
  }
}

export default fileToMessage
