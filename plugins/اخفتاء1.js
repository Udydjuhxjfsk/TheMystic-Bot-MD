let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  ${conn.getName(m.sender)} انه في وضع الاختفاء السبب${text ? ': ' + text : ''}
  `)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^اختفاء$/i

export default handler