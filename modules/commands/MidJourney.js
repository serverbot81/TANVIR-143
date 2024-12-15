const axios = require('axios');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 
module.exports = {
  config: {
  name: "midjourney",
  version: "1.0",
  credits: "dipto",
  hasPermssion: 0,
  usePrefix: true,
  prefix: true,
  description: "Generate images by MidJourney AI",
  commandCategory: "download",
  category: "download",
  usages:
    "[text] \n prefix. midjourney 4k quality apple realistic",
  cooldowns: 5,
}, 
  run: async({ api, event, args }) => {
    const prompt = (event.messageReply?.body.split("dalle")[1] || args.join(" ")).trim();
    if (!prompt) return api.sendMessage("❌| Wrong Format. ✅ | Use: prefix. midjourney 4k quality apple realistic", event.threadID, event.messageID);
    try {
       //const cookies = "cookies here (_U value)";
const cookies = ["19TszJuB_FVAiyEx31vBsVumY0cDtVF4V1B4kU3ccJIv31KczDe5TsLOYa1j8BTQzChCqu4VXPbKEEJ7Pbex6vB_1T-0pOWdq05TR79mARGwut68YSxF4DK-tC6ow3K9_8VWstSD2T7y7-E4-7S77J2O0qjGVCCNdCGArT0aIvEUzrYJlml-_7PdVsk1Utcp12V2vd0FaSXfqYh5yzyjidQ", "137jfRDj1ZuuP_IOU1zjV66LY8eu7vK51CbRIKnXXY85toSv_9ELQeurK9mKWkdsaOq-hNs5_Y900V-rSzFkFts8pdFDWLqNfjmJKUqmv_r7NLHl8hRlfdU6YuX8e7_P1IJ4-oZhaKQZFItz6lqkzj_mwKIvCPs4TH6FKV9ntCqNRRumoas73HISN4Fi1XmggK-8jt4DO13pNRCw3w5iXP_d2TehjrHhVAilYnykmcEk", "1V_Rd3IoVz3J7jKx6pwgmzM4D24jNA3RFQzK5e0mxQnzZhjrFz0F5VF_sUReM3J8QJnbM_PQ02STfugXLpQ0Kk0rJgKGXMp_N2f0FRSKJw-LOjF3XHwrJJEF5Wta2yz7udBYeWosN8STNHBRCmb8wj2INU34GK_QNHuTfMWEsusrHioFPKWmUOj0KF4XZOx805hZHAu3TvQpEzyL9DkYL5nhTbJujWEWIAfi5fe8XM0Q"];
const randomCookie = cookies[Math.floor(Math.random() * cookies.length)];
      const wait = api.sendMessage("[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘯𝘨,  𝘸𝘢𝘪𝘵...", event.threadID);
      const response = await axios.get(`https://www.noobs-api.000.pe/dipto/mj?prompt=${prompt}}`);
const imageUrls = response.data.imageUrls || [];
      if (!imageUrls.length) return api.sendMessage("Empty response or no images generated.", event.threadID, event.messageID);
      const images = await Promise.all(imageUrls.map(url => axios.get(url, { responseType: 'stream' }).then(res => res.data)));
    api.unsendMessage(wait.messageID);
   api.sendMessage({ body: `[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘎𝘦𝘯𝘦𝘳𝘢𝘵𝘦𝘥 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭`, attachment: images }, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage(`Generation failed!\nError: ${error.message}`, event.threadID, event.messageID);
    }
  }
}
