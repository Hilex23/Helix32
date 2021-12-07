import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Tests the bot',

    slash: 'both',
    testOnly: true,

    callback: ({ message, interaction }) => {
        if (message) { 
            message.reply('Testing...')
            .then(message => {
            setTimeout(function() {
                message.edit("Test Successful ✅")
            }, 3000);
                })}
                
        if (interaction) {
            interaction.reply ({
                content: 'Testing...',
                ephemeral: false,
            })
            .then((message) => {
                setTimeout(function() {
                    interaction.editReply("Test successful ✅")
                }, 3000);
            })
        }
    },
} as ICommand