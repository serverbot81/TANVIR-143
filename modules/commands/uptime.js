module.exports = {
config: {
name: "uptime",
usePrefix: true,
hasPermission: 0,
commandCategory: "Uptime"
},
run: async function({message}) {
const d = Math.floor(process.uptime() / 86400 );
const h = Math.floor(process.uptime() / 3600 % 24 );
const m = Math.floor((process.uptime() % 3600) / 60);
const s = Math.floor(process.uptime() % 60);
message.reply(`BOT IS RUNNING :\n ${h}hrs ${m}mins ${s}secs`);
}
};