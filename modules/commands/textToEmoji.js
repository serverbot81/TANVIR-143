const axios = require('axios');

module.exports = {
  config: {
    name: 'emoji',
    version: '1.0',
    author: 'kshitiz',
    cooldown: 5,
    usePrefix: true,
    hasPermission: 0,
    commandCategory: 'fun',
  },
  run: async function ({ api, event, args }) {
    try {
      if (!args[0]) {
        throw new Error('provide a text message.');
      }

      const text = encodeURIComponent(args.join(' '));
      const response = await axios.get(`https://t2e.vercel.app/t2i?text=${text}`);

      if (response.status !== 200 || !response.data || !response.data.emoji) {
        throw new Error('Invalid response from API');
      }

      const emoji = response.data.emoji;

      await api.sendMessage({
        body: emoji,
      }, event.threadID, event.messageID);

      console.log(`Sent`);
    } catch (error) {
      api.sendMessage(`Failed to convert text to emoji: ${error.message}`, event.threadID, event.messageID);
      api.sendMessage('Please try again later.', event.threadID, event.messageID);
    }
  }
};