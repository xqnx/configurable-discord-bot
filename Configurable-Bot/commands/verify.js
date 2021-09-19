module.exports = {
  name: 'verify',
  description: 'Remove unverified role, add verified role',
  commands: 'verify',
  minArgs: 1,
  expectedArgs: "<Target user's @>",
  permissions: "ADMINISTRATOR",
  execute(message, args) {
    const { member, mentions } = message;
    // set role names for unverified and verified
    let unverified = message.guild.roles.cache.find(role => role.name === "[unverified-role-name]");
    let verified = message.guild.roles.cache.find(role => role.name === "[verified-role-name]");
    let targetUser = message.mentions.members.first();
    if (
      member.hasPermission('ADMINISTRATOR')
    ) {
      if (!targetUser) {
        message.reply('please specify someone to verify.');
        return;
      } else if (targetUser.roles.cache.find(r => r.name === "[unverified-role-name]")) {
        targetUser.roles.remove(unverified);
        targetUser.roles.add(verified);
        message.channel.send("Verified :white_check_mark:");

      } else {
        message.reply('this user is already verified');
      }

    } else {
      message.reply("LOL no perms!");

    }
  }
}



