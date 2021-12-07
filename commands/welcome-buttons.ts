import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Dev-only',
    description: 'Makes customizable buttons',

    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    slash: 'both',
    testOnly: true,

    callback: async ({ interaction: msgInt, channel }) => {
        const row =new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL('https://vylex.tk')
            .setEmoji('🕸️')
            .setLabel('Visit Website')
            .setStyle('LINK')
        )
        .addComponents(
            new MessageButton()
            .setURL('https://discord.gg/Qm4p3gaXgu')
            .setEmoji('📖')
            .setLabel('Rules')
            .setStyle('LINK')
        )
        .addComponents(
            new MessageButton()
            .setURL('https://discord.gg/2Ad7gRjcB4')
            .setEmoji('🛒')
            .setLabel('Roles')
            .setStyle('LINK')
        )
        await msgInt.reply({
            content: 'Check these out!',
            components: [row]
        })
    }
} as ICommand