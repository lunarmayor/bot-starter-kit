import request from 'request'
import cheerio from 'cheerio'

const pullDocFromSlack = (url, cb) => {
  request({ url }, (err, res, html) => {
    let $ = cheerio.load(html)
    let filebody = $('.file_body')
    let image = filebody.find('img')
    let src = $('.file_body').find('img').first().attr('src')
    cb(src)
  })
}

export default pullDocFromSlack
