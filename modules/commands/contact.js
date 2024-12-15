module.exports = {
  config: {
  name: "in",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  prefix: 'awto',
  description: "Inbox",
   usePrefix: true,
  commandCategory: "no",
  category: "without prefix",
  cooldowns: 5
},

start: async function({ nayan, events, Users, NAYAN }) {
  let uid;
  if (events.type === "message_reply") {
    uid = events.messageReply.senderID;
  } else if (Object.keys(events.mentions).length > 0) {
    uid = Object.keys(events.mentions)[0];
  } else {
    uid = events.senderID;
  }

  let name = await Users.getNameUser(uid);
const msg = `[🤍]➜ 𝗡𝗔𝗠𝗘: ${name}\n[🤍]➜ 𝗜𝗗: ${uid}`
await NAYAN.sendContact(msg, uid, events.threadID, events.messageID);
}
} 