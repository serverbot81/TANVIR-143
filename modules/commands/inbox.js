module.exports.config = {
  name: "inbox",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Yan Maglinte",
  description: "Share a contact of a certain userID",
  usePrefix: false, 
  commandCategory: "message",
  cooldowns: 5 
};

module.exports.run = function ({ api, event }) {
  api.shareContact("PROFILE 👇        |        👇 INBOX", event.senderID, event.threadID, (err, data) => {
    if (err) console.log(err);
  })
};