const axios = require('axios');
const fs = require('fs-extra');

const models = [
  "0. Absolute Reality V16"
];

module.exports.config = {
  name: "img3",
  version: "1.0.0",
  permission: 0,
  credits: "no",
  prefix: true,
  usePrefix: true,
  commandCategory: "no",
  description: "get user id.",
  category: "Art",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const { threadID = "defaultThreadID", messageID = "defaultMessageID" } = event || {};
    let prompt = args.join(' ');
    let model = "0";

    if (prompt.includes('-')) {
      const parts = prompt.split('-');
      prompt = parts[0].trim();

      const parsedModel = parseInt(parts[1].trim());
      if (!isNaN(parsedModel) && parsedModel >= 0 && parsedModel < models.length) {
        model = parsedModel.toString();
      } else {
        return api.sendMessage(
          '❗ 𝘸𝘳𝘰𝘯𝘨 𝘱𝘳𝘰𝘮𝘱𝘵. ',
          threadID,
          messageID
        );
      }
    } else if (!prompt) {
      const modelsList = models.map((model, index) => `𝘚𝘵𝘢𝘺 𝘞𝘪𝘵𝘩 𝘛𝘢𝘯𝘷𝘪𝘳 𝘉𝘰𝘵`).join('\n');
      return api.sendMessage(
        '𝘗𝘭𝘦𝘢𝘴𝘦 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘱𝘳𝘰𝘮𝘱𝘵. 𝘌𝘹𝘢𝘮𝘱𝘭𝘦 : /make 𝘢 𝘤𝘶𝘵𝘦 𝘣𝘰𝘺.\n\n' +
        modelsList,
        threadID
      );
    }

    const processingMessage = await api.sendMessage(
      '[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘯𝘨,  𝘸𝘢𝘪𝘵...',
      threadID,
      null,
      messageID
    );

    const API = `https://ccprojectapis.ddns.net/api/generate-art?prompt=${encodeURIComponent(prompt)}`;

    const timeout = 20000;
    const imageStreamPromise = axios.get(API, { responseType: 'arraybuffer' });

    try {
      const imageStream = await Promise.race([
        imageStreamPromise,
        new Promise((_, reject) =>
          setTimeout(() => {
            api.unsendMessage(processingMessage.messageID);
            reject(new Error('𝘛𝘪𝘮𝘦 𝘖𝘶𝘵, 𝘛𝘳𝘺 𝘈𝘨𝘢𝘪𝘯'));
          }, timeout)
        ),
      ]);

      if (imageStream) {
        const path = __dirname + `/cache/imagine.png`;
        fs.writeFileSync(path, Buffer.from(imageStream.data, 'utf-8'));

        api.sendMessage(
          {
            attachment: fs.createReadStream(path),
          },
          threadID,
          () => {
            fs.unlinkSync(path);
            api.unsendMessage(processingMessage.messageID);
          },
          messageID
        );
      } else {

        api.sendMessage('Something wrong', threadID, messageID);
      }
    } catch (error) {

      console.error(error);
      api.sendMessage('Something wrong', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('Something wrong', threadID, messageID);
  }
};