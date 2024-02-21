// Import necessary modules
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');
const emoji = require('../config/emojis.json');
const { downloadAndSaveImage, readCSV, setClient } = require('../utils.js');
const { consoleLog, consoleError } = require('../debug.js');
const { fetchAssetData, client } = require('../nft_bot.js');

// Extract configuration values
const prefix = config.prefix;
const fileData = {};
const imageData = {};


// Export the command module
module.exports = {
    name: 'show',
    description: 'Old command to show an asset. Will soon be removed.',
    setClient,

     // Execute function for handling the 'info' command
     async execute(message) {
        if (message.author.bot) return;

        if (message.content.startsWith(prefix + 'show')) {
            await readCSV(fileData, imageData);
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();

            if (command === 'show') { 
                message.reply(`${message.author}, this command is now deprecated, please use \`!link <fileNumber>\` instead!`);
            }
        }
    },
};