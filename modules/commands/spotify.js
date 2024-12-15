module.exports = {
config: {
  name: "spotify",
  version: "0.0.2",
  permission: 0,
  prefix: true,
  credits: "Nayan",
  usePrefix: true,
  commandCategory: "no",
  description: "",
  category: "admin",
  usages: "",
    cooldowns: 5,
},

  languages: {
  "vi": {},
      "en": {
          "missing": 'গানের নাম বলো জানু☹️',
          "send": '[🤍] 𝘸𝘢𝘪𝘵 𝘣𝘢𝘣𝘺 𝘱𝘢𝘵𝘢𝘤𝘤𝘩𝘪 🙈.',
        "error": '❌Error'
      }
  },

run: async function({ nayan, events, args, lang }) {
  if (!args[0]) return nayan.reply(lang("missing"), events.threadID, events.messageID);
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { spotify} = require('nayan-server')
    const text = args.join(" ")
    nayan.reply(`[🤍] 𝘴𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘵𝘩𝘪𝘴 𝘴𝘰𝘯𝘨...`, events.threadID, events.messageID);
    const res = await spotify(`${text}`);
  console.log(res);
    var data = res.data;
    var msg = [];
    let img1 = `${res.data.audio}`;
    let cp = `${res.data.title}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp3", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp3"));

    {
        msg += `[🤍] 𝘚𝘵𝘢𝘺 𝘞𝘪𝘵𝘩 𝘛𝘢𝘯𝘷𝘪𝘳 𝘉𝘰𝘵`
    }

   nayan.reply(lang("send"), events.threadID, events.messageID)
    return nayan.reply({
        body: msg,
        attachment: allimage
    }, events.threadID, events.messageID);
} 
}