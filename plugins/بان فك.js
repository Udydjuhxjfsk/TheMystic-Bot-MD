let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗معلومة❗] يجب ان تعمل منشن للشخص الذي تريد رفع عنه الحظر*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗معلومة❗] يجب ان تضع منشن للشخص الذي تريد ان ترفع عنه الحظر*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗معلومة❗] لقد تم فك البان بنجاح*\n*—◉ هو الان قادر علي استعمال البوت*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^بان_فك$/i
handler.rowner = true
export default handler