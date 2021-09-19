module.exports = {
  name: 'unverify',
  description: 'Add unverified role, remove verified role',
  commands: 'unverify',
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
        message.reply('please specify someone to unverify.');
        return;
      } else if (targetUser.roles.cache.find(r => r.name === "[verified-role-name]")) {
        targetUser.roles.remove(verified);
        targetUser.roles.add(unverified);
        message.channel.send("Unverified :white_check_mark:");

      } else {
        message.reply('this user is already unverified.');
      }
    } else {
      message.reply("LOL no perms!");
    }

  }
}



