/**filter
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/


module.exports.config = {
    name: "filter",
    version: "2.0.0",
    permission: 1,
    usePrefix: true,
  commandCategory: "no",
    credits: "ProCoderMew",
    description: "নষ্ট আইডি রিমুভ,  তানভীর বট দিয়ে",
    prefix: false,
    category: "Facebook user filter box",
    usages: "/filter",
    cooldowns: 300
}
module.exports.run = async function({ api: a, event: b }) {
    var { userInfo: c, adminIDs: d } = await a.getThreadInfo(b.threadID), f = 0, e = 0, g = [];
    for (const d of c) void 0 == d.gender && g.push(d.id);
    return d = d.map((a) => a.id).some((b) => b == a.getCurrentUserID()), 0 == g.length ? a.sendMessage("[🩵] গ্রুপে Facebook User (নষ্ট) আইডি নেই", b.threadID) : a.sendMessage("[🩵] গ্রুপে রয়েছে " + g.length + " টি নষ্ট আইডি", b.threadID, function() {
        return d ? a.sendMessage("[🩵] নষ্ট আইডি রিমুভ হচ্ছে...\n-----------------------------\n STAY WITH TANVIR BOT", b.threadID, async function() {
            for (const c of g) try {
                await new Promise((a) => setTimeout(a, 1e3)),
                await a.removeUserFromGroup(parseInt(c), b.threadID),
                f++
            } catch (a) {
                e++
            }
            a.sendMessage("[🩵] নষ্ট আইডি " + f + " টি রিমুভ সম্পূর্ণ", b.threadID, function() {
                if (0 != e) return a.sendMessage("[❎] নষ্ট আইডি " + e + " টি রিমুভ অসম্পূর্ণ...", b.threadID)
            })
        }) : a.sendMessage("[🩵] বট আইডিটি এডমিন দিয়ে কমান্ড রান করুন\n\n🔰 STAY WITH TANVIR BOT", b.threadID)
    })
};