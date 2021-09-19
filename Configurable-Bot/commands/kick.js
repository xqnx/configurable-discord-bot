
module.exports = {
  name: 'kick',
  description: 'Kick command',
  execute(message, args) {
    const { member, mentions } = message;
    const tag = '<@${member.id}>';

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first();
      if (target) {
        const targetUser = message.guild.members.cache.get(target.id);
        targetUser.kick();
        message.reply(`that user has been kicked :white_check_mark:`);
      } else {
        message.reply(`please specify someone to kick.`);
      }
    } else {
      message.reply(`you do not not have permissions to use this command.`);
    }
  }
}


