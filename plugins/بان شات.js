let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗ملاحظة❗] هاذا الشات تم حظره بالفعل*\n\n*—◉ البوت لن يتفاعل بي اي امر حتي يتم رفع الحظر*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^بان_شات$/i
handler.rowner = true
export default handler