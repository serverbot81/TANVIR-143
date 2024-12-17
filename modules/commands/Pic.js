module.exports.config = {
	name: "pic",
	hasPermission: 0,
	commandCategory: "search",
	usePrefix: true,
	cooldowns: 6,
	usage: ". pic cute cat . 5"
	
	
	};


module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    if(keySearch.includes(".") == false) return api.sendMessage('[🤍]   (ছবির ধরন লেখার পর একটি ডট. দিয়ে কতো গুলো ছবি চান তার পরিমান লিখুন)\n\n ex: .pic cute cat . 5 ', event.threadID, event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split(".").pop() || 6
    const res = await axios.get(`https://s4b1k-api-uj42.onrender.com/pinterest?search=${encodeURIComponent(keySearchs)}&count=${encodeURIComponent(numberSearch)}`);
    const data = res.data.data;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: numberSearch + ' টি ছবি রয়েছে \nসার্চ করেছেন: + keySearchs
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};
