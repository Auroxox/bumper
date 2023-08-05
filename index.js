const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

  // Call the sendMessage function every 3 hours (in milliseconds)
  setInterval(sendMessage, 3 * 60 * 60 * 1000);
});

// Function to send messages to channels
async function sendMessage() {
  const channelIds = [
    '11351335930862059521',
	'1135133593086205952',
	'1102697175571517533',
	'1127277800097845329',
	'1127982322310992035',
	'1101231407549911113',
	'112048208536746000',
	'1132751485000757286',
	'1135744467010338989',
	'1130623777928118350',
	'1116079234163691671',
	'1116190082232221767',
	'1127563260980383750',
	'1127042303249367130',
	'1134951858910273568',
	'1126398454193717300',


    // Add more channel IDs as needed
  ];

  const messageToSend = `
  **Choccy shop**
  
  # **Get the best value**
  
  - Free NonDhooked Oauth
  - Beaming tools for CHEAP **Best Src code**
  - Trusted by over 200 people
  - Made by one of the biggest servers (**Accelerated**)
  ——————-———————————
  # **Free nondhooked oauth**
  discord.gg/choccyy
	`;

  channelIds.forEach(channelId => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
      channel.send(messageToSend)
        .then(() => console.log(`Message sent to ${channel.name} in ${channel.guild.name}`))
        .catch(error => console.error(`Error sending message: ${error}`));
    }
  });
}

client.login('MTExODE1ODUzMDExODE1NjQ4Mg.GsVfah.STWMeLeIDHQeo4PmfXaN87LKCNPo_5Wq0QxaZ8');
