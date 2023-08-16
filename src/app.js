import "dotenv/config"
import TelegramBot from "node-telegram-bot-api"

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const bills = [];

bot.onText(/\/bill (.+)/, (msg, match) => {

    const chatId = msg.chat.id
    const resp = match[1];

    if(bills.includes(resp)) {
        return bot.sendMessage(chatId, "Already Exist!")
    }

    bills.push(resp);
    bot.sendMessage(chatId, resp)
})