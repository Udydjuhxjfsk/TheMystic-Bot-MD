import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paypal.me/MOHAMEDSharkawy642')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*༺═━━═⊱╊⊰❄⊱╉⊰═━━═༻*
*❮ ◈┇اهـلا, ${taguser}┇ ◈❯*
*❮ ◈┇قـائـمـة اوامـر الـبـوت┇ ◈❯*
*❮ ◈┇الاسـم↜ غوتاي بـوت ❯*
*❮ ◈┇وقـت الـعـمـل↜ ${uptime} ❯*
*❮ ◈┇الـمـطـور↜ wa.me/201050861664 ❯*
*❮ ◈┇الـوضـع↜ عـام ❯*
*❮ ◈┇الـنـسـخـة↜ V1.5.7❯*
*❮ ◈┇الـمـنـصـة↜ ريـبـلايـت ❯*
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
*˼‏📜˹ قـسـم الـمـجـمـوعـات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❍↜╎.منشن』*
*『❍↜╎.مخفي』*
*『❍↜╎.طرد』*
*『❍↜╎.اضافة』*
*『❍↜╎.ترقيه』*
*『❍↜╎.تخفيض』*
*『❍↜╎.احذف』*
*『❍↜╎.جروب فتح』*
*『❍↜╎.جروب قفل』*
*『❍↜╎.تغيرالصوره』*
*『❍↜╎.لينك』*
*『❍↜╎.طرد_رمز』*
*『❍↜╎.انذار』*
*『❍↜╎.الغاء_الانذار』*
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
*˼‏⏬˹ قـسـم الـتـحـمـيـل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❍↜╎.فيديو』*
*『❍↜╎.اغنيه』*
*『❍↜╎.صورة』*
*『❍↜╎.طقم』*
*『❍↜╎.فيديو』*
*『❍↜╎.البحث』*
*『❍↜╎.تيك』*
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
*˼‏🎮˹ قـسـم الـتـرفـيـه╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❍↜╎.اكس_او』*
*『❍↜╎.احذف_اللعبه』*
*『❍↜╎.تحدي』*
*『❍↜╎.احزر』*
*『❍↜╎.حظ』*
*『❍↜╎.جميل』*
*『❍↜╎.ورع』*
*『❍↜╎.اهبل』*
*『❍↜╎.خروف』*
*『❍↜╎.انطق』*
*『❍↜╎.نسبة』*
*『❍↜╎.لو』*
*『❍↜╎.تويت』*
*『❍↜╎.تاج』*
*『❍↜╎.سؤال』*
*『❍↜╎.اسئلني』*
*『❍↜╎كت』*
*『❍↜╎.شطرنج』*
*『❍↜╎.سلاحي』*
*『❍↜╎.علم』*
*『❍↜╎.نصايح』*
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
*˼‏♻️˹ قـسـم الـتـحـويـل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❍↜╎.ملصق』*
*『❍↜╎.حقوق』*
*『❍↜╎.لصورة』*
*『❍↜╎.لفيديو』*
*『❍↜╎.لرابط』*
*『❍↜╎.حيوان』*
*『❍↜╎.قط』*
*『❍↜╎.كلب』*
*『❍↜╎.ستك』*
*『❍↜╎.مترجم』*
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
*˼‏👥˹ قـسـم الاعـضـاء╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❍↜╎.اختفاء』*
*『❍↜╎.تحدث』*
*『❍↜╎.بروفايلي』*
*『❍↜╎.سرعه』*
*『❍↜╎.خط』*
*『❍↜╎.دمج』*
*『❍↜╎.هل』*
*『❍↜╎.منشني』*
*『❍↜╎.توب』*
*『❍↜╎.تصاميم』*
*『❍↜╎.ايات』*
*『❍↜╎.المطور』*
*『❍↜╎.جوجل』*
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
*˼‏🧧˹ قـسـم الـمـطـور╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❍↜╎.بان』*
*『❍↜╎.بان_فك』*
*『❍↜╎.بان_شات』*
*『❍↜╎.بان_شات_فك』*
*『❍↜╎.حطها_بروفايل』*
*『❍↜╎.اخرج』*
*『❍↜╎.ادخل』*
*༺═━━═⊱╊⊰❄⊱╉⊰═━━═༻*
`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『❄┇𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃』', 
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/https://www.paypal.me/MOHAMEDSharkawy642`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|اوامر|memú|help|بوت|comandos|allmenu|2help|menu1.2|الاوامر|غوتاي|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}