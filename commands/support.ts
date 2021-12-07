import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Help',
    description: 'Sends an invite link to the bot\'s support server',

    slash: 'both',
    testOnly: true,

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setTitle("Support server")
            .setDescription("Need help with something? [Join our support server](https://discord.gg/Hh3W3y9VWK)!")

        return embed
    },
} as ICommand