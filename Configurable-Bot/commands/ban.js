
module.exports = {
  name: 'ban',
  description: 'Ban command',
  execute(message, args) {
    const { member, mentions } = message;
    const tag = '<@${member.id}>';

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first();
      if (target) {
        const targetUser = message.guild.members.cache.get(target.id);
        targetUser.ban();
        message.reply(`that user has been banned :white_check_mark:`);
      } else {
        message.reply(`please specify someone to ban.`);
      }
    } else {
      message.reply(`you do not not have permissions to use this command.`);
    }
  }
}

