import linebot from 'linebot'
import dotenv from 'dotenv'

// 設定環境變數 .env 檔案
dotenv.config()
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

console.log(bot)
