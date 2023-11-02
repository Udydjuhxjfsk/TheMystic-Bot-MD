let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '*[ ⚠️ تحذير ⚠️ ] خطئ اللينك منتهي  او غير متوفر*\n*👉🏻 رابط غير متوفر *\n\n*مثال:*\n*.ادخل https://chat.whatsapp.com/FwUGxkvZD85fIp0gKyFC*\n\n*[❗𝐈𝐍𝐅𝐎❗] لا تسوي ريبلاي علي رسالة, هاذا قد يسبب مشكلة, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝚄𝙽𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙼𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙽𝚄𝙴𝚅𝙾*'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*تم دخول الجروب المطلوب ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ 𝐈𝐍𝐅𝐎 ❗] 𝙽𝚄𝙴𝚅𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚂𝙴 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:* ' + link, jid)
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚂𝚄 𝙶𝚁𝚄𝙿𝙾 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰*\n\n*👉🏻 𝚂𝚄 𝙶𝚁𝚄𝙿𝙾 𝙴𝚂𝚃𝙰𝚁𝙰 𝙴𝙽 𝙴𝚅𝙰𝙻𝚄𝙰𝙲𝙸𝙾𝙽 𝚈 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙳𝙴𝙲𝙸𝙳𝙸𝚁𝙰 𝚂𝙸 𝙼𝙴 𝙰𝙶𝚁𝙴𝙶𝙰 𝙾 𝙽𝙾*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙰𝙻𝙶𝚄𝙽𝙰𝚂 𝙳𝙴 𝙻𝙰𝚂 𝚁𝙰𝚉𝙾𝙽𝙴𝚂 𝙿𝙾𝚁 𝙻𝙰 𝙲𝚄𝙰𝙻 𝚂𝚄 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝙳𝙰 𝚂𝙾𝙽:*\n*1.- 𝙴𝙻 𝙱𝙾𝚃 𝙴𝚂𝚃𝙰 𝚂𝙰𝚃𝚄𝚁𝙰𝙳𝙾*\n*2.- 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙿𝚁𝙴𝚅𝙸𝙰𝙼𝙴𝙽𝚃𝙴 𝙴𝙻 𝙱𝙾𝚃 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n*3.- 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙵𝚄𝙴 𝚁𝙴𝙴𝚂𝚃𝙰𝙱𝙻𝙴𝙲𝙸𝙳𝙾*\n*4.-𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚂𝙴 𝙰𝙶𝚁𝙴𝙶𝙰 𝙰 𝙶𝚁𝚄𝙿𝙾𝚂 𝙿𝙾𝚁 𝙳𝙴𝚂𝙸𝙲𝙸𝙾𝙽 𝙳𝙴 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰*\n\n*👉🏻 𝚃𝙴𝙽 𝙴𝙽 𝙲𝚄𝙴𝙽𝚃𝙰 𝚀𝚄𝙴 𝚃𝚄 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙿𝙰𝚁𝙰 𝚄𝙽𝙸𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚃𝙰𝚁𝙳𝙰𝚁 𝙷𝙾𝚁𝙰𝚂 𝙾 𝙳𝙸𝙰𝚂 𝙴𝙽 𝚂𝙴𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙰, 𝚃𝙴𝙽 𝙿𝙰𝙲𝙸𝙴𝙽𝙲𝙸𝙰*')
}
} catch {
throw '*❮ ❗┇هاذا الامر لي مالك البوت فقط❯*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|ادخل$/i
handler.private = true 
export default handler
