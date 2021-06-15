const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.guild.members.forEach(user => {
        user.send(content);
    });
};

module.exports.help = {
    name: 'help'
};