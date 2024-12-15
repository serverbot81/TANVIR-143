module.exports.config = {
  name: "date",
  version: "1.0.0",
  permssion: 0,
  usePrefix: true,
  commandCategory: "no",
  credits: "tanvir143",
  description: "( 𝙀𝙭𝙖𝙘𝙩 𝙩𝙞𝙢𝙚 & 𝙙𝙖𝙩𝙚 )",
  commandCategory: "Time and Date",
  usages: "( Exact time )",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const moment = require("moment-timezone");
  var supremo = moment.tz('Asia/Dhaka').format('hh:mm:ss');
  var draven = moment.tz('Asia/Dhaka').format('D/MM/YYYY');
  var kiel = moment.tz('Asia/Dhaka').format('dddd');
  if (kiel == 'Sunday') kiel = 'রবিবার'
  if (kiel == 'Monday') kiel = 'সোমবার'
  if (kiel == 'Tuesday') kiel = 'মঙ্গলবার'
  if (kiel == 'Wednesday') kiel = 'বুধবার'
  if (kiel == "Thursday") kiel = 'বৃহস্পতিবার'
  if (kiel == 'Friday') kiel = 'শুক্রবার'
  if (kiel == 'Saturday') kiel = 'শনিবার'
  let name = await Users.getNameUser(event.senderID);
  return api.sendMessage(`\n[🤍] 𝘏𝘦𝘺 ${name} 𝘉𝘢𝘣𝘺\n\n[🤍] 𝘋𝘢𝘵𝘦: ${draven} \n[🤍] 𝘋𝘢𝘺 𝘕𝘢𝘮𝘦: ${kiel}`, event.threadID, event.messageID)
}