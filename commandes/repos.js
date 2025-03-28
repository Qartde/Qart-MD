"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🙄", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://github.com/Qartde/Qart-MD';
  const img = 'https://files.catbox.moe/xz4dn6.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = ` *𝐦𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬 * *𝐐𝐀𝐑𝐓 𝗠𝗗.*\n _𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝚘𝚞𝚛 𝚌𝚑𝚊𝚗𝚗𝚎𝚕 ,  https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31

🤠 *𝑅𝐸𝑃𝑂𝑆𝐼𝑇𝑂𝑅𝑌:* ${data.html_url}

🕐 *𝑈𝑃 𝐷𝐴𝑇𝐸𝐷 𝑂𝑁 :* ${repoInfo.lastUpdate}
⊷━━━━━━☆•∞•☆━━━━━━⊷  

 ╭━━═✺ *𝐐𝐀𝐑𝐓* ✺═━━⊷
 │┌═━━⊷•∞•⊷━━─⊛
 │┊❁*𝐯𝐢𝐬𝐢𝐭𝐨𝐫:* ${repoInfo.visitors}
 │┊❁ *𝐬𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
 │┊❁ *𝐟𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
 │┊❁ *𝐫𝐞𝐥𝐞𝐬𝐞𝐝 𝐝𝐚𝐭𝐞:* ${releaseDate}
 │┊❁ *𝐜𝐫𝐞𝐚𝐭𝐨𝐫:* *𝐐𝐚𝐫𝐭𝐌𝐝*
 │┊❁ *𝐭𝐡𝐞𝐦:* *𝐪𝐚𝐫𝐭*
 │┊❁ *𝖆𝖑𝖜𝖆𝖞𝖘 𝖖𝖆𝖗𝖙❤🥶*
 │└═━━⊷•∞•⊷━━─⊛
 ╰━━━═⊷✺•∞•✺⊷═━━━⊷ 
 
 > Dont Forget Fork And Star Please `;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
