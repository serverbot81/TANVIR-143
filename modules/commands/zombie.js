const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};
module.exports.config = {
  name: "zombie",
  aliases: ["zom", "zombi", "jombi", "jombie", "jom"],
  category: "zombiePic",
  category: " remini",
  prefix: true,
  usePrefix: true,
  commandCategory: "no",
  permission: 0,
  author: "Romim"
};

module.exports.run = async ({ api, event, args }) => {
  try {

    if (!event.messageReply || !event.messageReply.attachments || !event.messageReply.attachments[0]) {
      return api.sendMessage("🤍] ছবির রিপ্লে তে লেখো.", event.threadID, event.messageID);
    }
api.sendMessage("[✅] 𝘱𝘭𝘦𝘢𝘴𝘦 𝘸𝘢𝘪𝘵 𝘧𝘦𝘸 𝘴𝘦𝘤𝘰𝘯𝘥.", event.threadID, event.messageID);

    const Romim = event.messageReply?.attachments[0]?.url;


    const apiUrl = (`https://c-v5.onrender.com/image2zombie?url=${encodeURIComponent(Romim)}`);


    const imageStream = await axios.get(apiUrl,{
      responseType: 'stream'
    });


    api.sendMessage({
      body: "[🤍] 𝘱𝘩𝘰𝘵𝘰 𝘦𝘥𝘪𝘵𝘦𝘥 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭",
      attachment: imageStream.data
    }, event.threadID, event.messageID);

  } catch (e) {
    api.sendMessage(`Error: ${e.message}`, event.threadID, event.messageID);
  }
};
