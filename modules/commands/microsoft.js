const axios = require("axios");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};
module.exports.config = {
  name: "micro",
  aliases: ["microsoft"],
  version: "1.0",
  credits: "Mesbah Bb'e",
  usePrefix: true,
  cooldowns: 5,
  hasPermssion: 0,
  description: "m ac",
  commandCategory: "ac geb",
  category: "gen",
  usages: "ok",
};

module.exports.run = async function ({ api, event }) {
  try {
    const apiUrl = `https://joshweb.click/api/genmicro?name=tanvirBot.`;
    const response = await axios.get(apiUrl);
    const {
      email,
      password
    } = response.data.result;

    const result =
      "𝘏𝘦𝘳𝘦 𝘪𝘴 𝘔𝘪𝘤𝘳𝘰𝘴𝘰𝘧𝘵 𝘈𝘤𝘤𝘰𝘶𝘯𝘵\n\n 𝘮𝘢𝘪𝘭 :\n" +
      " " + email + "\n" +
      "𝘗𝘢𝘴𝘴 : " + password + "\n\n- 𝘛𝘩𝘢𝘯𝘬 𝘠𝘰𝘶";

    api.sendMessage(result, event.threadID);
  } catch (e) {
    console.error(e);
    api.sendMessage(`Error: ${e.message}`, event.threadID);
  }
};
