import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Utility',
    description: 'Sends the link the the bot\'s repository on GitHub',
    aliases: 'code',

    slash: 'both',
    testOnly: true,

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setTitle("Bot's source code")
            .setDescription("You can find the bot\'s source code on [GitHub](https://github.com/Hilex23/Helix32). Just a reminder, the source code of the 'help' command is not available.")

        return embed
    },
} as ICommand