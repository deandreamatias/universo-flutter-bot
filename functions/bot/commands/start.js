exports.default = (bot) => {
    bot.start(async (ctx) => {
        try {
            return ctx.reply('Welcome to the jungle');
        } catch (e) {
            return console.log(e);
        }
    })
}
