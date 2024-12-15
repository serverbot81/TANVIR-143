/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "romantic",
  aliases: ["kissvideo"],
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tanvir Tamim",
  usePrefix: true,
  description: "romantic video",
  commandCategory: "random romantic+ video",
  usages: "prefix",
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
  api.sendMessage("[🥵]  𝘸𝘢𝘪𝘵 𝘣𝘢𝘣𝘺 🙈",event.threadID, event.messageID);
   var hi = ["𝘌𝘺 𝘕𝘢𝘰 𝘙𝘰𝘮𝘢𝘯𝘵𝘪𝘤 𝘷𝘪𝘥𝘦𝘰 𝘣𝘢𝘣𝘺 🙈"];
  var tanvir = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://drive.google.com/uc?id=145xP46UtHSBCxcr97R4kxKRkikAK1sn",
"https://drive.google.com/uc?id=143j88sbhjaYyhgRdhcznINGbEw7e4srv",
"https://drive.google.com/uc?id=14OgE7R6LC7IdZWpdAQMljRB6DMhQlKUb",
"https://drive.google.com/uc?id=15ApHtgILQd4aKGHlspP8TC0KOz7e9qiG",
"https://drive.google.com/uc?id=151u-HovGiIHnrQv2ev_Hd4G3EbblZGns",
"https://drive.google.com/uc?id=13ou2Tv5_pCFg2_dlc8DDxQV4DhjhQ0Ir",
"https://drive.google.com/uc?id=146XtBF_30MKNaj-IvOh_wAN0thmfrByx",
"https://drive.google.com/uc?id=14N63OsV0Xrlg9_nTHWZooGZwmq3Qw1yf",
"https://drive.google.com/uc?id=13whghNgrRNjsrXC8M40Fw4ul0XGjuAxy",
"https://drive.google.com/uc?id=146pcrLfUujNSwzJZR7_3rMjhyAO0aUmA",
"https://drive.google.com/uc?id=13tlvq6Kn6nkYcONSOIy6nioUnrALEbT0",
"https://drive.google.com/uc?id=143w4H6Cd-BrRcB7GcwlCsXMvawFb_9Gd",
"https://drive.google.com/uc?id=14FFNfLj3aHrxdEQok61uV9c2k36pcJIY",
"https://drive.google.com/uc?id=15CsQnaHNoKCCrv3furvj3tMDM27e9zkc",
"https://drive.google.com/uc?id=14_eAD_AcHVX_bEGr4fV7kq5j5vTy2pIi",
"https://drive.google.com/uc?id=14Z1IOSeeC1PoGHfERh5hWYyfpKTAXR4L",
"https://drive.google.com/uc?id=15CYRC1uFUFPgFS2Um0rpDIZwx6GRYtwk",
"https://drive.google.com/uc?id=152QAOzpdJQ2CTSiCpiR9qgK8iIEYYTGA",
"https://drive.google.com/uc?id=14Io3vFFTJTWheAyJ5A2zrLw5pF5frN0Q",
"https://drive.google.com/uc?id=14CE0iJMCYE-DKCT4Nrhj9OWz6_v1d3qH",
"https://drive.google.com/uc?id=13rDWirLl3Bi9TnGFUeSj4SANFZgYUl4S"];
     var callback = () => api.sendMessage({body:`${tanvir}`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
