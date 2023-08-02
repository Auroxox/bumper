const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
	// See other options here
	// https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
	// All partials are loaded automatically
});
const channelID = '1126346934228103170';

client.login('MTExODE2MDM4OTA1NDY3NzA4Mg.Gzxqjl.zQDPGi7bcHH10xduYFQg3ATXRoSl9UX0fKV_a4');


client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  console.log('Bot is ready!');
 

})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  if (message.content === '!hello') {
    await message.channel.send('Hello, I am your friendly Discord bot!');
  } else if (message.content === '!ping') {
    await message.channel.sendSlash('302050872383242240', 'bump');
  } else if (message.content === '!info') {
    await message.channel.send('I am a simple bot created using Discord.js!');
  }
});
