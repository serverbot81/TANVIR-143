  module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tanvir Tamim",
  description: "Tanvir Bot e Comamnd",
  commandCategory: "TOOL",
    usePrefix: false,
  usages: "prefix help",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/75MIJZs.jpeg",
     ];
     var callback = () => api.sendMessage({body: "★𝘛𝘢𝘯𝘷𝘪𝘳𝘉𝘰𝘵 𝘊𝘰𝘮𝘮𝘢𝘯𝘥 𝘓𝘪𝘴𝘵★\n\n [🤍] .art - artfy image \n [🤍] .img - image gen\n [🤍] .img2 - image gen \n [🤍] .img3 - image gen \n[🤍] . img4 - image gen \n [🤍] .make - pollinations\n [🤍] .dalle - bing image \n [🤍] .flux - flux image gen \n [🤍] .midjourney - img gen \n [🤍] .profile - dp downld \n [🤍] .alldl - autoDownloadAll \n [🤍] .pic - search  pic \n [🤍] .play - play song \n [🤍] .video - play video \n [🤍] .mention - tag members \n [🤍] .remini - enhance img \n [🤍] .janu - talk baby sim \n [🤍] .bot - talk  bot \n [🤍] .mix - emoji mix \n [🤍] .horny -X(porn) \n [🤍] .romantic - kissVideo \n [🤍] .date - see Date \n [🤍] .spotify - spotify song \n [🤍] .removebg - bg remove \n [🤍] .gemini - GeminiAi \n [🤍] .gemini2 - geminiAi2 \n [🤍] .ai - oepnAi \n [🤍] .gcimg - groupCover \n  [🤍] .flag - flag game \n [🤍] .fbcover -v1/v2/v3/v4/v5 \n [🤍] .prompt - img prompt \n [🤍] .namaz - namaz Time \n [🤍] .mail - tempMail \n [🤍] .lyrics - song lyrics \n [🤍] .emoji - text2emoji \n [🤍] .uptime - ck uptime \n\n ★ for more update - coming\nstay with us\n\n - Thank You",attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
