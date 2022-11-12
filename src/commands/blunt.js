const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blunt")
    .setDescription("M-am prăjit m-am spartă"),
  async execute(interaction) {
    await interaction.reply("Bag un blunt!");
  },
};
