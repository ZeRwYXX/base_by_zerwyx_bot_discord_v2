const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
usedCommandRecently4 = new Set(); 
const { MessageEmbed } = require('discord.js');
client.login('TOKEN');

client.on("guildMemberAdd", member => {
  const embed2 = new MessageEmbed()
   
  .setColor("#ff0000") 
  .setDescription(`${member} Viens d'arrivé dans le serveur discord!`)
  client.channels.cache.get('ID DU CHANNEL').send(embed2)


  })








client.on('guildCreate', (member) => {
  const embed = new MessageEmbed()
 .setColor("#00ffdc")
.setTitle(`Le bot a été ajouté a un serveur discord!`)
.addField('Nom du serveur:', `${member.name}`)
.setThumbnail("https://cdn.discordapp.com/attachments/683231372189368324/799718358161031178/Sans_titre-1.png")
client.channels.cache.get('ID DU CHANNEL').send(embed)

});

client.on("guildMemberRemove", member => {
    const embed2 = new MessageEmbed()
   
    .setColor("#ff0000") 
    .setDescription(`${member} Nous à quitter`)
    message.author.send(embed2)
})
client.on("ready", () => {
  const channel = client.channels.cache.get("795729323155914793");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
      console.log("Successfully connected.");

        const embed = new MessageEmbed()
        .setColor('#00ffdc')
      .setDescription(`Le bot c'est connecté avec succès`)
      .setThumbnail("https://cdn.discordapp.com/attachments/683231372189368324/799718358161031178/Sans_titre-1.png")
      
      client.channels.cache.get("ID CHANNEL").send(embed);
      
  }).catch(e => {

      console.error(e);
  });
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannelID
  let oldUserChannel = oldMember.voiceChannelID

  if(newUserChannel === IDDUCHANNELOUJOURLEBOT) {
     
      console.log("Joined VC1")


  } else if(newUserChannel !== IDDUCHANNELOUJOURLEBOT){

  }
})




const activities_list = [
    
    `https://discord.gg/s7KhnuRj5t`,
    `discord.gg/s7KhnuRj5t`,
    ];

    client.on('ready', () => {
        console.log("GENERATEUR Connecter avec succes")
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
            client.user.setActivity(activities_list[index]); 
        }, 30000); 
    });



//////////////////////////////////////////
client.commands = new Discord.Collection();
fs.readdir('./cmd-zerwyx/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./cmd-zerwyx/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});



fs.readdir('./cmd-zerwyx/admin/', (error, f) => {
  if (error) { return console.error(error); }
      let commandes = f.filter(f => f.split('.').pop() === 'js');
      if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

      commandes.forEach((f) => {
          let commande = require(`./cmd-zerwyx/admin/${f}`);
          console.log(`${f} commande chargée !`);
          client.commands.set(commande.help.name, commande);
      });
});






fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} event chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
            }
)})








        


