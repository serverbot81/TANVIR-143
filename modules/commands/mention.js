module.exports.config = {
    name: "mention",
    version: "1.0.2",
    permission: 0,
    credits: "tanvir",
    usePrefix: false,
    description: "",
    commandCategory: "without prefix",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("mention member", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 4200);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 5400);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 6600);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 7800);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 8800);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 9200);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 10400);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 11600);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 12800);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 14000);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 14200);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 15400);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 16600);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 17800);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 18500);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 19200);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 20300);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 21000);
setTimeout(() => {a({body: " ✅	    " + " " + name, mentions: arraytag})}, 22500);

setTimeout(() => {a(" Mentioned Successful ✅")} , 24000);




  }
