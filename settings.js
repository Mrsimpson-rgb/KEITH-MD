/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJSRll0cUtROFRsVmE5dFZrMzNZdlhkOVJza2tUc1NQT1J6M3Y0YlFHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVlMa0tkc2FuWGdwM2JRcTduWnR3U1U1WGJJR0RWaDNiY2lhQW1WUzJ6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRUN6Skhqb2h0Nk9hOXFOSDNvUnl2d3c1MzJmajBxbWFmeWd1czM5cG5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrK3lPZFErb2EwaGpaUEUwR3JKVmtBMlo3QkpzMUVSdjhyK0xxSWVLMmxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMVHBFVkRxSUdmUmxrQWJ5S1JTeWMxQm1vWG9IZ3I2Z0R4WFZDR2U5VWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDUS8rYjAwbFFILyt1WVExckZFeHo2TllvMUltZDlFNW1kalhYQ1IzM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pYNElheEIxQlpzSUg2NmlOUHY0ZFF0UjlNMmk0VTl1SWNNSVh1d29FND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2VjelZyK2hoa3pzRzJUKzZYYUxPYzdtL3UwL3hhTDR0RFpKTlQ4RUZDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR5T2MwaVF0V0dRck1iVDhnYS8vUW1yNmYvaHNib0R5VTJOVWkrNTNmckV3TitOTCtKMFd0dkcydkNwYjc0YTl2QVg5NW1rZEtZMkJUSi9ob0d5VUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJ2VTZkWlFVdC9tNjRZRXZsZktzbzBKUjJsdFF5TXdIRFRTUU8vQXpEU1BvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJucEtQN1FYWlFnMklqa21tVFVqRG1nIiwicGhvbmVJZCI6IjVjMThjYjQxLWFmMjctNGFkNy1hYjczLWIwYmU4ZmU3MzUxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZkhhLzQ0UC9WSG5DOEFTQzAzN0pNUmdsWGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiek9aOWxhVUNPaEM3eXVYQVM2cXUyYVN5em5vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllKU0JBN0IxIiwibWUiOnsiaWQiOiIyNTY3ODY3OTg1MTc6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVlBOUyBTRVJWSUNFUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0R5OXZnRkVJZUs0cm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRGpDMTRGWk5zOGFpazVUdUJQeW9YdGVUQ1R1VUZNQ3RnR1ZLS0xydWl3TT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSjZvOE5tcVloR1phUEtCMUVrUTB6Wm9EME1XM2lKV2R0bmUxMEpob3JVMXVYbzFvVitnZGhNSVJ5Y2F5Qng2bSt5NUVFSnNROHlZYjZGV3ZjSDM5QWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjZCOVN3bHc2dkVNNndtYVkyNTU0SFB5VkZNaVBGdE1laGxublQyTkZGalNBZVo5TXJsZGhKcXlUc012dmYzL1ZldkNtM1VwTmM4OWprS2NqWDZyckJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg2Nzk4NTE3OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE0d3RlQldUYlBHb3BPVTdnVDhxRjdYa3drN2xCVEFyWUJsU2lpNjdvc0QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM4NTQ0ODR9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Simpson';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '256786798517';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'true';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag, 
  antidelete
};
