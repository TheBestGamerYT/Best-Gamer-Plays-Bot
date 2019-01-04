const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!g "

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('!g help | discord.gg/urSjkJx', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'b! is prefix'}`))
    .catch(console.error);
})

client.on('message', message => {
  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send({embed:{
  "plainText": "Welcome this is **Best Gamer Plays** Bots Help Page !",
  "title": "Commands:",
  "author": {
    "name": "Click here to invite me !",
    "url": "https://discordapp.com/oauth2/authorize?client_id=363356945760911360&scope=bot&permissions=8",
    "icon_url": "https://pbs.twimg.com/profile_images/973406721011015680/GLCTdHA__400x400.jpg"
  },
  "color": 13632027,
  "footer": {
    "text": "|Made by TheBestGamerYT|-|Powered by TeamCo7 Developments|-|© 2018-2019|"
  },
  "fields": [
    {
      "name": "Misc:",
      "value": "• b! ping - Pong !",
      "inline": true
    },
    {
      "name": "Utility:",
      "value": "• b! help - Full list of commands",
      "inline": true
    }
  ]
}});
  	}
  });
client.login(process.env.BOT_TOKEN);
