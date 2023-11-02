let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*⌫┇تـم رفـع الـبـان عـن الـشـات┇〄*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^بان_شات_فك$/i
handler.rowner = true
export default handler