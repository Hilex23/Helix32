import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Utility',
    description: 'Sends an invite link to the bot\'s support server',

    slash: 'both',
    testOnly: true,

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setTitle("Bot invite")
            .setDescription("You can invite the bot [here](https://discord.com/api/oauth2/authorize?client_id=895774392687149056&permissions=277428268102&scope=bot%20applications.commands)!")

        return embed
    },
} as ICommand