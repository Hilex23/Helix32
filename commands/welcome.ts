import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Dev-only',
    description: 'Makes a customizable welcome message',

    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    slash: false,
    testOnly: true,

    callback: ({ message }) => {
            message.channel.send('Welcome! This is the official Vilex\'s Discord server. The server is owned by <@339489914590855180> and <@370258256775479307>. Make sure you read the #rules before doing anything else. After that you can go to #get-roles to, well, receive some roles. Also make sure to visit our website!')}
} as ICommand