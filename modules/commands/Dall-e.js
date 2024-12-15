const axios = require('axios');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 
module.exports = {
  config: {
  name: "dalle",
  version: "1.0",
  credits: "dipto",
  hasPermssion: 0,
  usePrefix: true,
  prefix: true,
  description: "Generate images by Dalle-3 AI",
  commandCategory: "download",
  category: "download",
  usages:
    "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k]",
  cooldowns: 5,
}, 
  run: async({ api, event, args }) => {
    const prompt = (event.messageReply?.body.split("dalle")[1] || args.join(" ")).trim();
    if (!prompt) return api.sendMessage("❌| Wrong Format. ✅ | Use: 17/18 years old boy/girl watching football match on TV with 'Dipto' and '69' written on the back of their dress, 4k", event.threadID, event.messageID);
    try {
       //const cookies = "cookies here (_U value)";
const cookies = ["19TszJuB_FVAiyEx31vBsVumY0cDtVF4V1B4kU3ccJIv31KczDe5TsLOYa1j8BTQzChCqu4VXPbKEEJ7Pbex6vB_1T-0pOWdq05TR79mARGwut68YSxF4DK-tC6ow3K9_8VWstSD2T7y7-E4-7S77J2O0qjGVCCNdCGArT0aIvEUzrYJlml-_7PdVsk1Utcp12V2vd0FaSXfqYh5yzyjidQ", "137jfRDj1ZuuP_IOU1zjV66LY8eu7vK51CbRIKnXXY85toSv_9ELQeurK9mKWkdsaOq-hNs5_Y900V-rSzFkFts8pdFDWLqNfjmJKUqmv_r7NLHl8hRlfdU6YuX8e7_P1IJ4-oZhaKQZFItz6lqkzj_mwKIvCPs4TH6FKV9ntCqNRRumoas73HISN4Fi1XmggK-8jt4DO13pNRCw3w5iXP_d2TehjrHhVAilYnykmcEk", "1V_Rd3IoVz3J7jKx6pwgmzM4D24jNA3RFQzK5e0mxQnzZhjrFz0F5VF_sUReM3J8QJnbM_PQ02STfugXLpQ0Kk0rJgKGXMp_N2f0FRSKJw-LOjF3XHwrJJEF5Wta2yz7udBYeWosN8STNHBRCmb8wj2INU34GK_QNHuTfMWEsusrHioFPKWmUOj0KF4XZOx805hZHAu3TvQpEzyL9DkYL5nhTbJujWEWIAfi5fe8XM0Q"];
const randomCookie = cookies[Math.floor(Math.random() * cookies.length)];
      const wait = api.sendMessage("Wait koro baby 😽", event.threadID);
      const response = await axios.get(`${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookies=${randomCookie}`);
const imageUrls = response.data.imgUrls || [];
      if (!imageUrls.length) return api.sendMessage("Empty response or no images generated.", event.threadID, event.messageID);
      const images = await Promise.all(imageUrls.map(url => axios.get(url, { responseType: 'stream' }).then(res => res.data)));
    api.unsendMessage(wait.messageID);
   api.sendMessage({ body: `✅ | Here's Your Generated Photo 😘`, attachment: images }, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage(`Generation failed!\nError: ${error.message}`, event.threadID, event.messageID);
    }
  }
}
