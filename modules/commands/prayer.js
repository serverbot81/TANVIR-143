const axios = require("axios");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};
module.exports.config = {
  name: "namaz",
  aliases: ["prayer"],
  version: "1.0",
  credits: "Mesbah Bb'e",
  usePrefix: true,
  cooldowns: 5,
  hasPermssion: 0,
  description: "View Prayer time",
  commandCategory: "𝗜𝗦𝗟𝗔𝗠",
  category: " islam",
  usages: "{pn} <city name>",
};

module.exports.run = async function ({ api, args, event }) {
  try {
    const cityName = args.join(" ");
    const apiUrl = `${await baseApiUrl()}/namaj?cityName=${encodeURIComponent(cityName)}`;
    const response = await axios.get(apiUrl);
    const {
      fajr,
      sunrise,
      dhuhr,
      asr,
      maghrib,
      isha
    } = response.data.prayerTimes;

    const prayerTimes =
      "[⏰] জেলাভিত্তিক নামাজের সময়সূচী \n" +
      "[🌐] জেলা :" + cityName + "\n\n" +
      "[🤍] ফজর : " + fajr + "\n" +
      "[🤍] সূর্যোদয় : " + sunrise + "\n" +
      "[🤍] যোহর : " + dhuhr + "\n\n" +
      "[🤍] আছর : " + asr + "\n" +
      "[🤍] মাগরিব : " + maghrib + "\n" +
      "[🤍] এশা : " + isha + "\n";

    api.sendMessage(prayerTimes, event.threadID);
  } catch (e) {
    console.error(e);
    api.sendMessage(`Error: ${e.message}`, event.threadID);
  }
};
