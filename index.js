const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
moment.locale('ar'); 
const bot = new Discord.Client({disableEveryone: true});
var Jimp = require("jimp");
bot.commands = new Discord.Collection();




fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

fs.readdir("./others/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./others/${f}`);
    console.log(`${f} loaded!`);
  });
});


bot.on("ready", async () => {
  bot.user.setUsername("ريتويت");
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity('Retweet', {type: "PLAYING"});
  
 
    
});

function generateXp() {
  let min = 2
  let max = 7
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let blocked = [];
let heartc;
bot.on('messageReactionAdd', (reaction, user) => {
  
   // let chan = bot.channels.get("418048478573232158");
  //if(reaction.message.channel.id !== chan.id)return;
  if(user.bot)return;

if(reaction.emoji.name === '❤') {
  heartc=reaction.count
}
    
    if(reaction.emoji.name === 'retweet') {
      
      console.log(reaction.message.id)
      let chan = bot.channels.get("222153794081914880");
      let words = []
    let ad = ''
    words = reaction.message.content.split(" ");
for(let i =0 ; i < words.length ; i++){
    ad = ad + words[i] + ' ';
    if(i === 20 || i === 30 || i === 40){
        ad = ad + `\n`
    }
}
      
      
      for(let i in blocked){
        if(blocked[i] === `${reaction.message.id}${user.id}`)return;
        if(blocked[i] !== `${reaction.message.id}${user.id}`) continue;            
}
      var Canvas = require('canvas')
var jimp = require('jimp')
       let Image = Canvas.Image,
           canvas = new Canvas(1500, 397),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
       ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';    
       ctx.shadowOffsetY = 2;
       ctx.shadowBlur = 2;
       ctx.stroke();
       ctx.beginPath();
               
       fs.readFile('./img/note.png', function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 1500, 397);

})

               let url = reaction.message.author.displayAvatarURL.endsWith(".webp") ? reaction.message.author.displayAvatarURL.slice(5, -20) + ".png" : reaction.message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);                        
                                               //wl
                       ctx.font = '25px Aeland';
                       ctx.fontSize = '25px';
                       ctx.fillStyle = "#000000";
                       ctx.textAlign = "right";
                       ctx.fillText(ad, 1266, 160);
                       
                       ctx.font = '28px Aeland';
                       ctx.fontSize = '28px';
                       ctx.fillStyle = "#454003";
                       ctx.textAlign = "center";
                       ctx.fillText(reaction.count, 1025, 370);

                       //ctx.font = '28px Aeland';
                      // ctx.fontSize = '28px';
                      // ctx.fillStyle = "#454003";
                      // ctx.textAlign = "center";
                      // ctx.fillText(`${heartc}`, 800, 370);

                       //ur name
                       ctx.font = '35px Impact';
                       ctx.fontSize = '35px';
                       ctx.fillStyle = "#000000";
                       ctx.textAlign = "right";
                       ctx.fillText(`${reaction.message.author.discriminator}#${reaction.message.author.username}`, 1286, 110);
                     
                       ctx.font = '32px Impact';
                       ctx.fontSize = '32px';
                       ctx.fillStyle = "#454003";
                       ctx.textAlign = "right";
                       ctx.fillText(`تم إعادة تغريدها بواسطة`, 1306, 54);
                     ctx.font = '32px Impact';
                       ctx.fontSize = '32px';
                       ctx.fillStyle = "#454003";
                       ctx.textAlign = "right";
                       ctx.fillText(`${user.username}`, 970, 54);
                     ctx.font = '32px Impact';
                       ctx.fontSize = '32px';
                       ctx.fillStyle = "#454003";
                       ctx.textAlign = "right";
                       ctx.fillText(`${moment(Date.now()).format('ll')}`, 230, 54);
                       //Avatar
                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.beginPath();
                       ctx.arc(1370.5, 155, 70, 0, Math.PI*2, true);
                       ctx.closePath();
                       ctx.clip();
                       ctx.drawImage(ava, 1300, 85, 140, 140);
                       
chan.send({files: [canvas.toBuffer()]});



})
})
   console.log(blocked)
for(let i in blocked){
        if(blocked[i] === `${reaction.message.id}${user.id}`)return;
        if(blocked[i] !== `${reaction.message.id}${user.id}`) continue;            
}
      
      blocked.push(`${reaction.message.id}${user.id}`)
    }
});

bot.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type ==="dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  //if (message.content.startsWith("فهد")) return message.reply({files: ["https://cdn.discordapp.com/attachments/417087715444523010/430350204168962050/image.png"]});
  //if (message.content.toString()== ".") return message.channel.send("y");
    
  
  if (!message.content.startsWith(prefix)) return;
  
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


});

bot.login(process.env.BOT_TOKEN);
