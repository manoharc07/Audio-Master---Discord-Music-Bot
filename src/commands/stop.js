module.exports = {
  name: "stop",
  description: "Stop command.",
  cooldown: 5,
  execute(message) {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        "> Get into Voice Channel First :disappointed: !"
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send("> Queue Empty :disappointed: ");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("> Stop command has been used!");
  },
};
