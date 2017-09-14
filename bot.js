//Needed Lol
const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "<"; // I could of used - but looks disgusting
const Debugger = "";

//Start
bot.login('MzU3NjcwOTE3Nzk2NTI4MTMw.DJtzmA.Y6WBMng5AOLKCyx2sYQEGOj4w2g'); // login token

bot.on("ready", function() {
  console.log(`Bot is now online: ${bot.user.tag} and ready to kick some ass!`) // prints to console using my new method.
})
//Variables
var fortunes = [      // uses a 8ball math function
   "The stars say, Yes!",
   "Your dad says, No!",
   "Maybe",
   "Ask again later.",
];

var coinsides = [      // uses a 8ball math function
   "Heads",
   "Tails",
];

var working = [      // i could of added a dataStore but cba with it since this bot was only ment for Billys Tools
  "Fixed!",
  "Error, If this continues to happen, Contact Juicy ",
];
//Prefix & Shit Lol
bot.on("message", function(message) {
   if (message.author.equals(bot.user)) return;

   if (!message.content.startsWith(PREFIX)) return;

   var args = message.content.substring(PREFIX.length).split(" "); // this uses my own method that only hooks the prefix onto the user.
//Commands
   switch (args[0].toLowerCase()) {
          //Owners
          case "owners":
          var embed = new Discord.RichEmbed()
          .addField("Owners", "billythegamer12#5261 and </> Juicy-#5179")
          .setColor(0x00FF80)
          message.channel.sendEmbed(embed);
          break;
          //Cmds
          case "cmds":
          var embed = new Discord.RichEmbed()
         .addField("The Prefix is" + " " + PREFIX + " " + "for this server!", "Made by billythegamer12#5261 and </> Juicy-#5179!") // I will add a function that uses a DM hook example: >cmds "A list of cammands has been sent to you."
         .addField(Debugger + "Fun Commands", "--------------------------------------------")
         .addField(PREFIX + "Cmds", "Shows a list of commands",true)
         .addField(PREFIX + "Owners", "Shows the owners of this great bot :wink:")
         .addField(PREFIX + "Fixbot", "Fixes the bot, if broken.",true)                    // this command is broke af
         .addField(PREFIX + "Pissoff", "Well, what do you think it does?")
         .addField(PREFIX + "8ball" + " " + "`yourmessage`", "Generates a random yes, no, maybe answer.")
         .addField(PREFIX + "ExploitStatus", "Shows status's of exploits.")
         .addField(PREFIX + "Coinflip", "Umm... Flips a coin?")
         .addField(Debugger + "Moderative Commands", "--------------------------------------------")
         .addField(PREFIX + "Kick", "Not working yet!")
         .setColor(0x00FF80)
         message.channel.sendEmbed(embed);
          break;
        //fixbot command
        case "fixbot":
        var embed = new Discord.RichEmbed()
        .addField("Fixing..", "If this doesn't work, contact billythegamer12#5261!")  // like I said broke.
        .setColor(0x00FFF1)
         setTimeout(() => {
         if (args[0]) message.channel.sendMessage(working[Math.floor(Math.random() * working.length)]); // this is just a random working and offline bot system that is shit. I kinda did not wanna add a dataStore so I stuck with this.
         else message.channel.sendMessage("Error, cant fix bot.");
         }, 5000);
        message.channel.sendEmbed(embed);
        break;
        //pissoff command
        case "pissoff":
        message.channel.sendMessage(message.author.toString() + " Fucking piss off cunt.");  // sinmple message thing that ManyAdminsBallin came up with
        break;
        //8 Ball
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); // this does not use my new method as of now..
        else message.channel.sendMessage("Cant read that");
        break;
        //Coin Flip
        case "coinflip":
        if (args[0]) message.channel.sendMessage(coinsides[Math.floor(Math.random() * coinsides.length)]); // this does not use my new method as of now..
        else message.channel.sendMessage("Cant read that");
        break;
        //ExploitStatuses
          case "exploitstatus":
          var embed = new Discord.RichEmbed() // I kinda need to add a realtime status instead of updating it.
          .addField("Veil", "Working",true)
          .addField("ProtoSmasher", "Updating",true)
          .addField("Synapse", "Updating",true)
          .addField("R1", "I don't fucking know",true)
          .addField("CMDHAX", "Updating",true)
          .addField("Celetrius", "Updating",true)
          .setColor(0x00F230)
          message.channel.sendEmbed(embed);
          break;
          //Kick command
          case "kick":
          message.channel.sendMessage(message.author.toString() + " Fucking piss off cunt.");  // sinmple message thing that ManyAdminsBallin came up with
          break;

            default:
            message.channel.sendMessage("Please enter a valid command or use" + " " + PREFIX +  "cmds for a list of commands."); // this however does not use my own method...
   }
});
