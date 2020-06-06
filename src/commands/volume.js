module.exports = {
  name: "volume",
  description: "Volume command.",
  cooldown: 5,
  execute(message, args) {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        "> Get into voice channel First:face_with_symbols_over_mouth: "
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send("> There is nothing playing.:disappointed: ");
    if (!args[0])
      return message.channel.send(
        `> The current volume is: **${serverQueue.volume}**`
      );
    serverQueue.volume = args[0]; // eslint-disable-line
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    return message.channel.send(`> I have set the volume to: **${args[0]}**`);
  },
};
