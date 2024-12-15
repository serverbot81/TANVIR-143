const axios = require("axios");

      module.exports.config = {
      name: "horny",
      author: "Tanvir Tamim", 
      commandCategory: "video",
      category: "xok",
      prefix: true, 
      usePrefix: true,
      hasPermssion: 0,

      };
      module.exports.run = async function ({api, event, args }) {
const tanvir143 = args.join(" ");
         try {
      api.sendMessage("[🥵] 𝘍𝘪𝘯𝘥𝘪𝘯𝘨 𝘩𝘰𝘳𝘯𝘺 𝘷𝘪𝘥𝘦𝘰...",event.threadID, event.messageID);
      const {data} = await axios.get(`https://sexy-57bj.onrender.com/Romim/horny`)
      const tanvir = data.data;
      const stream = await axios.get(tanvir,{responseType: "stream"})
         api.sendMessage({attachment:stream.data}, event.threadID, event.messageID);

      }
   catch(tanvir) {
      api.sendMessage(`error:  ${tanvir.message}`,event.threadID, event.messageID)

   }
      }
