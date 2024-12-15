      const axios = require("axios");

      module.exports.config = {
      name: "img4",
      author: "Tanvir", 
      commandCategory: " img",
      category: "img edited",
      prefix: true, 
      usePrefix: true,
      permission: 0,

      };
      module.exports.run = async function ({api, event, args }) {
      const tanvir143 = args.join(" ");
         try {
      if (!tanvir143) return api.sendMessage("[🤍] 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘺𝘰𝘶𝘳 𝘱𝘳𝘰𝘮𝘰𝘵𝘦",event.threadID, event.messageID);
      api.sendMessage("[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘯𝘨,  𝘸𝘢𝘪𝘵...",event.threadID, event.messageID);
      const {data} = await axios.get(`https://www.noobz-api.000.pe/api/prodia?link=${tanvir143}`)
      const tanvir = data.data.imageUrl;
      const stream = await axios.get(tanvir,{responseType: "stream"})
         api.sendMessage({attachment:stream.data}, event.threadID, event.messageID);

      }
   catch(err) {
      api.sendMessage(`error:  ${err.message}`,event.threadID, event.messageID)

   }
}