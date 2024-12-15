const axios = require("axios");
const fs = require('fs')
const baseApiUrl = async () => {
  const base = await axios.get(
`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};
module.exports.config = {
    name: "song",
    version: "2.1.0",
    aliases: [ "music", "play"],
    credits: "dipto",
    countDown: 5,
    pemission: 0,
    description: "Download audio from YouTube",
    category: "media",
    commandCategory: "media",
    usePrefix: true,
    prefix: true,
    usages: "{pn} [<song name>|<song link>]:"+ "\n   Example:"+"\n{pn} chipi chipi chapa chapa"
  }
  module.exports.run = async ({api,args, event,commandName, message }) =>{
    const checkurl = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/;
    let videoID;
    const urlYtb = checkurl.test(args[0]);

if (urlYtb) {
  const match = args[0].match(checkurl);
  videoID = match ? match[1] : null;
        const { data: { title, downloadLink } } = await axios.get(
          `${await baseApiUrl()}/ytDl3?link=${videoID}&format=mp3`
        );
    return  api.sendMessage({
      body: title,
      attachment: await dipto(downloadLink,'audio.mp3')
    },event.threadID,()=>fs.unlinkSync('audio.mp3'),event.messageID)
}
    let keyWord = args.join(" ");
    keyWord = keyWord.includes("?feature=share") ? keyWord.replace("?feature=share", "") : keyWord;
    const maxResults = 6;
    let result;
    try {
      result = ((await axios.get(`${await baseApiUrl()}/ytFullSearch?songName=${keyWord}`)).data).slice(0, maxResults);
    } catch (err) {
      return api.sendMessage("কি গান🙂",event.threadID,event.messageID);
    }
    if (result.length == 0)
      return api.sendMessage("⭕ এতে কোনো কিছু খুজে পেলাম না🙂👉"+ keyWord,event.threadID,event.messageID);
    let msg = "";
    let i = 1;
    const thumbnails = [];
    for (const info of result) {
thumbnails.push(diptoSt(info.thumbnail,'photo.jpg'));
      msg += `${i++}. ${info.title}\nসময়: ${info.time}\nচ্যানেল: ${info.channel.name}\n\n`;
    }
    api.sendMessage({
      body: msg+ "\n [🤍] যে গান শুনতে চাও, সিরিয়াল রিপ্লে করো বেপ্স😽...",
      attachment: await Promise.all(thumbnails)
    },event.threadID, (err, info) => {
global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        result
      });
    },event.messageID);
  }
 module.exports.handleReply = async ({ event, api, handleReply }) => {
    try {
    const { result } = handleReply;
    const choice = parseInt(event.body);
    if (!isNaN(choice) && choice <= result.length && choice > 0) {
      const infoChoice = result[choice - 1];
      const idvideo = infoChoice.id;
  const { data: { title, downloadLink ,quality} } = await axios.get(`${await baseApiUrl()}/ytDl3?link=${idvideo}&format=mp3`);
    await api.unsendMessage(handleReply.messageID)
        await  api.sendMessage({
          body: `𝘚𝘵𝘢𝘺 𝘞𝘪𝘵𝘩 𝘛𝘢𝘯𝘷𝘪𝘳 𝘉𝘰𝘵`,
          attachment: await dipto(downloadLink,'audio.mp3')
        },event.threadID ,
       ()=>fs.unlinkSync('audio.mp3')
      ,event.messageID)
    } else {
      api.sendMessage("[🤍] ১ থেকে ৬ এর মধ্যে লেখো জানু😩😾",event.threadID,event.messageID);
    }
    } catch (error) {
      console.log(error);
      api.sendMessage("[🤍] 26 MB এর কম, এমন গান সিলেক্ট করো বেপ্স🍭🙁 ",event.threadID,event.messageID)
    }   
 };
async function dipto(url,pathName) {
  try {
    const response = (await axios.get(url,{
      responseType: "arraybuffer"
    })).data;

    fs.writeFileSync(pathName, Buffer.from(response));
    return fs.createReadStream(pathName);
  }
  catch (err) {
    throw err;
  }
}
async function diptoSt(url,pathName) {
  try {
    const response = await axios.get(url,{
      responseType: "stream"
    });
    response.data.path = pathName;
    return response.data;
  }
  catch (err) {
    throw err;
  }
}