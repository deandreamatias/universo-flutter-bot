const dotenv = require('dotenv');
const commands = require('../commands').default;

dotenv.config();
const HOST = 'https://universo-flutter.web.app/api/bot';
const TOKEN = process.env.BOT_TOKEN;
const URL = `https://api.telegram.org/bot${TOKEN}/setWebhook?url=${HOST}`;

exports.default = (bot) => {
    commands(bot);

    bot.launch();
}
