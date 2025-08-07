const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'fluxpro',
  alias: 'flux',
  react: '🧩',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply(`*Usage:* ${command} <prompt>\n\n*Example:* ${command} cat`);
    }

    await reply('> *𝘾𝙃𝘼𝙉𝙐𝙆𝘼-𝙈𝘿 𝙋𝙍𝙊𝘾𝙀𝙎𝙎𝙄𝙉𝙂 𝙄𝙈𝘼𝙂𝙀...🔥😽*');

    const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🏝️ *𝙁𝙇𝙐𝙓 𝙄𝙈𝘼𝙂𝙀 𝙂𝙀𝙉𝙀𝙍𝘼𝙏𝙊𝙍*\n\n📄 *𝙿𝚁𝙾𝙼𝙿𝚃:* ${text}\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*🚀` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
});
