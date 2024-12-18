const cron = require('node-cron');
const axios = require("axios");

const fetchWeather = async () => {
  try {
    const response = await axios.get('https://ccexplorerapisjonell.vercel.app/api/weather');
    const { synopsis, issuedAt, temperature, humidity } = response.data;
    return `Weather Update:\n\n${synopsis}\n\nIssued at: ${issuedAt}\nMax Temperature: ${temperature.max.value} at ${temperature.max.time}\nMin Temperature: ${temperature.min.value} at ${temperature.min.time}\nMax Humidity: ${humidity.max.value} at ${humidity.max.time}\nMin Humidity: ${humidity.min.value} at ${humidity.min.time}`;
  } catch (error) {
    return 'Unable to fetch weather information at the moment.';
  }
};

module.exports = async ({ api }) => {
  const config = {
    autoRestart: {
      status: false,
      time: 40,
      note: 'To avoid problems, enable periodic bot restarts',
    },
    greetings: [
      {
        cronTime: '0 5 * * *',
        messages: [`শুভ সকাল 🏜️🥰 @everyone`],
      },
      {
        cronTime: '0 8 * * *',
        messages: [`_বুকে হাজারো কষ্ট নিয়ে \n
                  আলহামদুলিল্লাহ বলাটা••!☺️ \n
_আল্লাহর প্রতি অগাধ বিশ্বাসের নমুনা❤️🥀`],
      },
      {
        cronTime: '0 10 * * *',
        messages: [`「 - ইসলাম অহংকার করতে শেখায় না!🌸 \n \n

- ইসলাম শুকরিয়া আদায় করতে শেখায়!🤲🕋🥀 」`],
      },
      {
        cronTime: '0 12 * * *',
        messages: [`দুপুরের খাবারের সময় হয়েছে👀, \n মোবাইল রেখে খাবার খেয়ে নাও😊🥀`],
      },
      {
        cronTime: '0 14 * * *',
        messages: [`_🌻••ছিঁড়ে ফেলুন অতীতের
সকল পাপের
               অধ্যায় ।
_ফিরে আসুন রবের ভালোবাসায়••🖤🥀 `],
      },
      {
        cronTime: '0 18 * * *',
        messages: [`শুভ সন্ধ্যা 🌃🥰🙃🥀`],
      },
      {
        cronTime: '0 20 * * *',
        messages: [`নিশ্চয় নামাজ অশ্লীল ও গর্হিত
        কার্য থেকে বিরত রাখে__🥀
        _____(সূরা আনকাবুত ৪৫)`],
      },
      {
        cronTime: '0 22 * * *',
        messages: [`শুভ রাত্রি 🌙🥀`],
      },
      {
        cronTime: '0 7 * * *',
        messages: async () => `শুভ সকাল 🌤️🥀\n\n${await fetchWeather()}`,
      },
      {
        cronTime: '0 19 * * *',
        messages: async () => `শুভ সন্ধ্যা 🌙🥀\n\n${await fetchWeather()}`,
      }
    ]
  };

  config.greetings.forEach((greeting) => {
    cron.schedule(greeting.cronTime, async () => {
      const message = typeof greeting.messages[0] === 'function' ? await greeting.messages[0]() : greeting.messages[0];
      api.getThreadList(20, null, ['INBOX']).then((list) => {
        list.forEach((thread) => {
          if (thread.isGroup) {
            api.sendMessage(message, thread.threadID).catch((error) => {
              console.log(`Error sending message: ${error}`, 'AutoGreet');
            });
          }
        });
      }).catch((error) => {
        console.log(`Error getting thread list: ${error}`, 'AutoGreet');
      });
    }, {
      scheduled: true,
      timezone: "Asia/Dhaka"
    });
  });

  if (config.autoRestart.status) {
    cron.schedule(`*/${config.autoRestart.time} * * * *`, () => {
      api.getThreadList(20, null, ['INBOX']).then((list) => {
        list.forEach((thread) => {
          if (thread.isGroup) {
            api.sendMessage("🔃 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀\n━━━━━━━━━━━━━━━━━━\nBot is restarting...", thread.threadID).then(() => {
              console.log(`Restart message sent to thread`, 'Auto Restart');
            }).catch((error) => {
              console.log(`Error sending restart message to thread ${error}`, 'Auto Restart');
            });
          }
        });
        console.log('Start rebooting the system!', 'Auto Restart');
        process.exit(1);
      }).catch((error) => {
        console.log(`Error getting thread list for restart: ${error}`, 'Auto Restart');
      });
    });
  }

};
