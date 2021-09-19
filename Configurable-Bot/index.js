// discord.js package
const Discord = require('discord.js');
const client = new Discord.Client();

// delete if you want to host the bot locally
// otherwise, you can keep the bot up for free using repl.it and uptime bot
// more info in the readme
const keepAlive = require("./server");
const mySecret = process.env['TOKEN'];
const fs = require('fs');
// set a prefix in config.json (? by default)
const { prefix, token } = require('./config.json');

// COMMANDS

// accesses ./commands/ and finds the command files
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.on('ready', readyDiscord);

// will send 'Ready.' to the console when started
function readyDiscord() {
  console.log('Ready.');
  // bot activity
  client.user.setActivity("xqnx", {
    type: "STREAMING",
    url: "https://github.com/xqnx"
  });

}

client.on('message', gotMessage);

// Ping Pong Command Example

/*function gotMessage(msg) {
  console.log(msg.content);
  if (msg.channel.id == '[channel id]' && msg.content === 'ping') {
    msg.reply('pong');
  }
}
*/

// BODY

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;


  let args = message.content.slice(prefix.length).split(" ");

  switch (args[0]) {
    case 'github':
      client.commands.get('github').execute(message, args);
      break;
    case 'discord':
      client.commands.get('discord').execute(message, args);
      break;
    //  case 'verify': verification system, remove if not needed
    // adds unverified role to new members, add verified role by ?verify @user, remove it by ?unverify @user
    // change server permissions to allow verified to view public channels and not allow unverified to view channels
    //  client.commands.get('verify').execute(message, args); // remove if unneeded
    //  break;
    // case 'unverify':
    //  client.commands.get('unverify').execute(message, args);
    //  break;
    case 'kick':
      client.commands.get('kick').execute(message, args);
      break;
    case 'ban':
      client.commands.get('ban').execute(message, args);
      break;
    case 'ping':
      client.commands.get('ping').execute(message, args);

      break;


  }
})

// WELCOME message

client.on('guildMemberAdd', member => {
  console.log(member.user.username + ' has joined the server.');
  // enter your welcome channel id 
  let channel = member.guild.channels.cache.find(channel => channel.id === '[your-welcome-channel-id]');
  if (!channel) return;
  channel.send(`${member} has joined the offical discord server of ---------------------.`);

  // let unverified = member.guild.roles.cache.find(role => role.id === '[role id of unverified]');
  // member.roles.add(unverified);
  // ads unverified role to new user, remove the comments if needed

})

client.login(mySecret); //token, hide with .env



