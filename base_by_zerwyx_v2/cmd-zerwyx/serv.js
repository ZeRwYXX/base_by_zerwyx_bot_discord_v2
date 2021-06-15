const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setColor("#08ebff") 
    .addField("🌐- Nombre total de membres:", client.guilds.cache.reduce((a, g) => a + g.memberCount,0))
              message.author.send(embed);
  
};
module.exports.help = {
    name: 'serv'
};