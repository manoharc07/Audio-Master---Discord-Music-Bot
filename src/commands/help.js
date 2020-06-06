const { Util } = require("discord.js");
module.exports = {
  name: "help",
  description: "available commands",
  cooldown: 5,
  execute(message) {
    return message.channel.send(
      "> `.play <URL>      \u25B6\uFE0F - Play Song from YouTube URL.         `\r\n> `.skip       \uFE0F     \u23ED\uFE0F - Skip Current Track.                 `\r\n> `.np              \uD83C\uDFB5 - Now playing.                        `\r\n> `.pause           \u23F8\uFE0F - Pause Current Track.                `\r\n> `.resume          \u23EF\uFE0F - Resume Current Track.               `\r\n> `.stop            \u23F9\uFE0F - Stop playing. Bot Leaves Channel.   `\r\n> `.volume <number> \uD83D\uDD0A - Set Volume level. Default Value 2.  `"
    );
  },
};
