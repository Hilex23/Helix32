import DiscordJS, { Client, Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
import testSchema from './test-schema'
import mongoose from 'mongoose'
import disabledCommands from 'wokcommands/src/models/disabled-commands'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS
    ],
})

client.on('ready', () => {
    console.log('Helix32 online')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['862097687230414849', '820256957369679882', '917829894975668294'],
        botOwners: ['370258256775479307'],
        mongoUri: process.env.MONGO_URI,
        dbOptions: {}
    })

    .setDefaultPrefix('h!')
    .setDisplayName('Helix32')
    .setCategorySettings([
        {
            name: 'Help',
            emoji: '❓',
            hidden: false
        },
        {
            name: 'Configuration',
            emoji: '⚙',
            hidden: false
        },
        {
            name: 'Moderation',
            emoji: '🔨',
            hidden: false
        },
        {
            name: 'Utility',
            emoji: '🧭',
            hidden: false
        },
        {
            name: 'Testing',
            emoji: '🧪',
            hidden: false
        },
        {
            name: 'Dev-only',
            emoji: '㊙️',
            hidden: true
        }
    ])
})

client.login(process.env.TOKEN)