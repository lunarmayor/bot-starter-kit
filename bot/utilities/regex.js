const regex = {
  matchUrls(string) {
    return string.match(/\b(http|https)?(:\/\/)?(\S*)\.(\w{2,4})\b/ig)
  },

  matchFullUrls(string) {
    return string.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:;,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:;,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:;,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i)
  },

  matchSubdomains(string) {
    let subdomainRegex = /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/ig
    return subdomainRegex.exec(string.replace(/[<>]/, ''))
  },

  extractMatchGroup(match) {
    if (match && match.length > 1) {
      return match[1].trim()
    }
  }
}

export default regex
