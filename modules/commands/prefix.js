module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 0,
  credits: "Hamim",
  usePrefix: true,
  description: "guide",
  commandCategory: "system",
  premium: false,
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["ok","mprefix","prefix", "!", "/","PREFIX"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
    const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (config.PREFIX == null) {
        return out(`[🤍] My Prefix : [ . ]`)
      }
      else return out(`PREFIX IS [ ${global.config.PREFIX} ]`)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("no prefix commands", event.threadID)
}
