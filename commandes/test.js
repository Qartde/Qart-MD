"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🤔", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐻𝑒𝑙𝑙𝑜𝑤 𝑚𝑦 𝑛𝑎𝑚𝑒 𝑖𝑠 𝚀𝙰𝚁𝚃 𝙼𝙳  * \n\n ' + "im a whatsapp bot multi-device created ";
    let d = '𝑝𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 𝚀𝙰𝚁𝚃 𝙼𝙳 ';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/xz4dn6.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="🤨"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *YESSER MD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *𝚀𝙰𝚁𝚃𝙼𝙳*'
      let varmess=z+d
      var img='https://files.catbox.moe/9it5tk.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
