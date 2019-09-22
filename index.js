import { getTime } from './src/actions';
import { answer } from './src/answers';
import './src/utils';

const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const moment = require('moment');
moment.locale('ru');

bot.start((ctx) => ctx.reply(`Привет! ${getTime()}`))
bot.help((ctx) => ctx.reply('Отправь мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('text', (ctx) => {
    ctx.reply(answer(ctx, ctx.update.message.text))
})
bot.on(['sticker', 'photo'], (ctx) => {
    console.log(ctx.message)
    return ctx.reply('Огонь!')
})

bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
