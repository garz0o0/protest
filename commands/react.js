
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("رووح العب بعيد يا بابا!").then(msg => {msg.delete(5000)});
   let chan = bot.channels.get("418048478573232158");
   let deleteStuff = () => {
let count = 0;
    message.channel.fetchMessages({limit: 100})
     .then(messages => {
       let messagesArr = messages.array();
       let messageCount = messagesArr.length;

       for(let i = 0; i < messageCount; i++) {
          (function() {
            count = count + 1;
            if(count >= 100) {
              deleteStuff();
            }
          })
       }
     })
     .catch(function(err) {
       console.log('error thrown');
       console.log(err);
     });
  
   }
   deleteStuff();
}

module.exports.help = {
  name:"react"
}
