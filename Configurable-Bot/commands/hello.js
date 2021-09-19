module.exports = {
  name: 'hello',
  description: 'This is hello',
  execute(message, args) {
    message.channel.send("Hello there!");
  }
}
// skeleton function, use these to build your own