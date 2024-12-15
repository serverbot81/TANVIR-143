/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "sexbd",
  aliases: ["xnxx", "sex", "18+", "xvideo", "sexvideo", " fuck"],
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Tanvir Tamim",
  usePrefix: true,
  description: "HAPPY VEDIO",
  commandCategory: "random 18+ video",
  usages: "prefix love",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  api.sendMessage("[🥵] 𝘑𝘢𝘤𝘤𝘦, 𝘸𝘢𝘪𝘵 𝘣𝘢𝘣𝘺 🥵💦",event.threadID, event.messageID);
   var hi = ["𝘌𝘺 𝘯𝘢𝘰 𝘝𝘪𝘥𝘦𝘰 𝘉𝘢𝘣𝘺🙈🥵💋💦"];
  var tanvir = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://drive.google.com/uc?id=10mr62sSPwqDHWspXtTHSawdfbi1_5K5u",
"https://drive.google.com/uc?id=10GCq9NpLhMHrGPIJZU1eZdts14pjqSMm",
"https://drive.google.com/uc?id=10JS06cGJffb-nvrRWrcWg0HR7Las3zag",
"https://drive.google.com/uc?id=10C1s84ea00iYHzUjhraNM60nso_uy2wA",
"https://drive.google.com/uc?id=10bdV6Uvd63HLDB-kabPpRSnwEL_kCdYj",
"https://drive.google.com/uc?id=10iK3b_AQiHCEHzoxaYyV660dxx4Ulkjy",
"https://drive.google.com/uc?id=10hFW7XCSQ5CQnYNlYpLO9UBFKp6N11k7",
"https://drive.google.com/uc?id=10aDUfj6Qoxp2A7Moy0FDOLPUYbMY4Z4l",
"https://drive.google.com/uc?id=10R09OraByYDhxeEO1bTbW-LvVe5oulX_",
"https://drive.google.com/uc?id=10JipMgQ5z19AhJj16EbK_QdJ6X2a6lvS",
"https://drive.google.com/uc?id=10rdTFiENgryYlnytvcx64vyQdLbGIhHU",
"https://drive.google.com/uc?id=10hue8CY2czPZu6n1CTrhQzgw2LpRDQ_e",
"https://drive.google.com/uc?id=10wUoriW-Be1_o-YfEQNK-KzwPJj1wdEH",
"https://drive.google.com/uc?id=10xU9Hhq77wgBLqaEsnBxA4ZOV_LjCbKz",
"https://drive.google.com/uc?id=10Vkfb_vSRsrqRlfXBoHs-D8N-SOekY5X",
"https://drive.google.com/uc?id=10mr62sSPwqDHWspXtTHSawdfbi1_5K5u",
"https://drive.google.com/uc?id=10xnqhTaD_z-80-Z54pj1oeWNk18rzGZt",
"https://drive.google.com/uc?id=115rdb6IOWlVAm1Eer7OxQAFX3O1SmmOs",
"https://drive.google.com/uc?id=111ZoUfwgLU8xtjNXcs-3YpeCAtnGLTAt",
"https://drive.google.com/uc?id=11l2ybhak4D22kfUrbF6QjVIMR61qqZwg",
"https://drive.google.com/uc?id=11iartJqY0r31tyKZX3aUuimDpROkAd7C",
"https://drive.google.com/uc?id=11lhir6YT1-THZBwdhRg7OoVm_Rq4RzV2",
"https://drive.google.com/uc?id=11mQyiOZYwJ6ndDNwpzQHMmldYEV7pARp",
"https://drive.google.com/uc?id=11VFmzeDQ6Jp2zLDPwwoqOMRZoV69Htlh",
"https://drive.google.com/uc?id=11_E9M76IkLZ_ZNmCH1nzAuRyOZ0wsYPj",
"https://drive.google.com/uc?id=11jv-UhjoGTHrI6W8fgUg2G9eV8M9QfNV",
"https://drive.google.com/uc?id=11jvqNuRpMkZnL8MPu21t-oUU-ngu6EG6",
"https://drive.google.com/uc?id=12Dg3CERuznOmStqXBsVHSCIc93NoKd1e",
"https://drive.google.com/uc?id=12NqA-Zva-DU9L52KBszqyet3V73EVMzY",
"https://drive.google.com/uc?id=12EO5yk9iW3T_ex-JIzQ4gTvpe6G9LlZp",
"https://drive.google.com/uc?id=12O5vw40BmspYWiKumAGYo40OWTAY-EK6",
"https://drive.google.com/uc?id=12HiqiO4_JFeGtRKZdsuj-ESDPRNWwmiB",
"https://drive.google.com/uc?id=12LDAW8pdsROvChxHO3HIsZGzgGJRSC-y",
"https://drive.google.com/uc?id=12OD88_gSyLw3PiCiR7LU76j7BtTPBqdB",
"https://drive.google.com/uc?id=12OQUGI3_fHb0VnQd7OSPAINB1OoqeNO8"];
     var callback = () => api.sendMessage({body:`${tanvir}`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
