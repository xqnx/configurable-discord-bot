module.exports = {
    name: 'ping',
    description: "shows the bot/'s ping",
    execute(message) {
        // add your own bots name
        message.channel.send('**Calculating [bots name] Bot Ping...**').then((msg) => {
            var ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit("**[bots name] Bot Ping!**\nPong! bot's ping is `" + ping + 'ms`.');
        });
    },
};