module.exports.config = {
  name: "goiadmin1",
  version: "1.0.0-beta-fixbyDungUwU",
  permssion: 0,
  prefix: false,
  usePrefix: true,
  commandCategory: "no",
  premium: false,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  category: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552753090872") {
    var aid = ["61552753090872"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝘼𝙮𝙖𝙖𝙩 𝘽𝙪𝙨𝙮 𝙖𝙘𝙚 𝙄𝙣𝙗𝙤𝙭 𝙚 𝙆𝙣𝙤𝙘𝙠 𝙙𝙖𝙬 - ✨🤍"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
