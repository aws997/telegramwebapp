const { Telegraf } = require('telegraf')
require('dotenv').config()

bot.start((ctx) => ctx.reply('Welcome',{
    reply_markup:{
        keyboard:[[{text:App,web_app:{url:"https://elaborate-baklava-cb9d4f.netlify.app/"}}]]
    }
}))

 
const bot = new Telegraf(process.env.TOKEN)
