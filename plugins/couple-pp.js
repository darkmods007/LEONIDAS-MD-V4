const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  'pattern': "couplepp",
  'alias': ["couple", "cpp"],
  'react': '💑',
  'desc': "Obtenez des images de couple masculin et féminin.",
  'category': "image",
  'use': ".couplepp",
  'filename': __filename
}, async (conn, m, store, {
  from,
  args,
  reply
}) => {
  try {
    reply("*💑 ʀᴇ́ᴄᴜᴘᴇ́ʀᴀᴛɪᴏɴ ᴅᴇs ɪᴍᴀɢᴇs ᴅᴇ ᴘʀᴏғɪʟ ᴅᴇ ᴄᴏᴜᴘʟᴇ...*");

    // Liste des images de couple prédéfinies
    const coupleImages = [
      {
        male: 'https://files.catbox.moe/cak9j9.jpg', // Remplace par ton URL d'image pour le mâle
        female: 'https://files.catbox.moe/58gaj4.jpg' // Remplace par ton URL d'image pour la femelle
      },
      {
        male: 'https://files.catbox.moe/mhhj6u.jpg',
        female: 'https://files.catbox.moe/j1f3bp.jpg'
      },
      {
        male: 'https://files.catbox.moe/ksoo87.jpg',
        female: 'https://files.catbox.moe/e6tjo9.jpg'
      },
      {
        male: 'https://files.catbox.moe/za4r2m.jpg',
        female: 'https://files.catbox.moe/bq5gsg.jpg'
      },
      {
        male: 'https://files.catbox.moe/qkz4tf.jpg',
        female: 'https://files.catbox.moe/vjzafq.jpg'
      },
         {
        male: 'https://files.catbox.moe/kqzsfc.jpg',
        female: 'https://files.catbox.moe/64kxyi.jpg'
      },
       {
        male: 'https://files.catbox.moe/jo7193.jpg',
        female: 'https://files.catbox.moe/x7snju.jpg'
      },
        {
        male: 'https://files.catbox.moe/0s8f4k.jpg',
        female: 'https://files.catbox.moe/xlgep0.jpg'
      },
        {
        male: 'https://files.catbox.moe/iaxx2c.jpg',
        female: 'https://files.catbox.moe/cgkcmj.jpg'
      },
        {
        male: 'https://files.catbox.moe/3z1y8i.jpg',
        female: 'https://files.catbox.moe/0wo9j9.jpg'
      }
    ];

    // Choisir une image aléatoire parmi celles définies
    const randomIndex = Math.floor(Math.random() * coupleImages.length);
    const { male, female } = coupleImages[randomIndex];

    if (male) {
      await conn.sendMessage(from, {
        'image': { 'url': male },
        'caption': "*👨 ɪᴍᴀɢᴇ ᴅᴇ ᴘʀᴏғɪʟ ᴅᴜ ᴄᴏᴜᴘʟᴇ ᴍᴀsᴄᴜʟɪɴ*"
      }, { 'quoted': m });
    }

    if (female) {
      await conn.sendMessage(from, {
        'image': { 'url': female },
        'caption': "*👩 ɪᴍᴀɢᴇ ᴅᴇ ᴘʀᴏғɪʟ ᴅᴜ ᴄᴏᴜᴘʟᴇ ғᴇ́ᴍɪɴɪɴ*"
      }, { 'quoted': m });
    }

  } catch (error) {
    console.error(error);
    reply("*❌ ᴜɴᴇ ᴇʀʀᴇᴜʀ s'ᴇsᴛ ᴘʀᴏᴅᴜɪᴛᴇ ʟᴏʀs ᴅᴇ ʟᴀ ʀᴇ́ᴄᴜᴘᴇ́ʀᴀᴛɪᴏɴ ᴅᴇs ɪᴍᴀɢᴇs ᴅᴇ ᴄᴏᴜᴘʟᴇ*");
  }
});
