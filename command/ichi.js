/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

//Module 
require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const textpro = require('./lib/textpro')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')
const dbog = require('../lib/Database.js')
const dbmesseg = new dbog()
var dbs = []
global.dbchatpesan = dbs

//Module Exports
module.exports = ichi = async(ichi, m, chatUpdate, store) => {
try {
  //console.log(m)

msg = m
  dbs.push({
  id: msg.key.id,
  msg
});

var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = ichi.user.id ? ichi.user.id.split(":")[0]+"@s.whatsapp.net" : ichi.user.id
const isOwner = [ichi.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == ichi.user.id ? true : false
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mode = 'public'

if (m && m.mtype == "protocolMessage") ichi.ev.emit("message.delete", m.message.protocolMessage.key);

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)

const reply = (texto) => { ichi.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, { quoted: m })}

if (m.isGroup) {
    try {
    let gchats = global.db.data.group[m.chat]
    if (typeof gchats !== 'object') global.db.data.group[m.chat] = {}
    if (gchats) {
    if (!('antilink' in gchats)) gchats.antilink = false
    if (!('antidelete' in gchats)) gchats.antidelete = false
    if (!('antiviewone' in gchats)) gchats.antiviewone = false
    } else global.db.data.group[m.chat] = {
    antilink: false,
    antidelete: false,
    antiviewone: false   
    }
    } catch (err) {
    console.error(err)
    }
}


//time
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
// Antilink
if (m.isGroup && db.data.group[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return //  buat ngediem in daripada nyepam m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await ichi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (m.isGroup && db.data.group[m.chat].antiviewone) {
    if (m.isGroup && m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
    let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    💫 *MessageType* : ${m.mtype}`
    reply(teks)
    await sleep(500)
    m.copyNForward(m.chat, true, {
       readViewOnce: true
       }, {
       quoted: mek
       }).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
    }
}

const jimp_1 = require('jimp')
async function pepe(media) {
     const jimp = await jimp_1.read(media)
     const min = jimp.getWidth()
     const max = jimp.getHeight()
     const cropped = jimp.crop(0, 0, min, max)
     return {
	img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
	preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
     }
}

if (mode == 'self') {
if (!m.key.fromMe && !isOwner) return
}

//Push command To Console
if (command) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ICHI \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

switch(command) {

case 'resetdbpesan': case 'resetdb': case 'resetdatabase': {
  fs.writeFileSync('./database/mess.json', JSON.stringify([], null, 2))
  m.reply("success")
}
break;
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
}
break
case 'menu': case 'simplemenu': case 'help': case '?': {
  let menu = `
╭──❒「 *INFO MENU* 」❒
├ *Nama* : ${pushname}
├ *Waktu* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
├ *Nama Bot* : ${global.packname}
├ *Owner Bot* : ${global.ownerName}
├ *Prefix * : [Multi Prefix]
├ *Runtime* : ${runtime(process.uptime())}
╰──❒
  Hai Kak ${pushname} Selamat ${ucapanWaktu} 😄 Aku Adalah ${global.packname}\n\n\n\n\n\n Yang dibuat oleh ${global.ownerName}\n\n\n Jika ada error atau fitur yang tidak bisa di gunakan harap maklumi ya kak \n\n\n karena owner ku masih belajar
 R U L E S 🚀*
	
1. Jangan Pernah Spam Bot ❎
2. Jangan Call Nomer Bot ❎
3. Jangan Mengeksploitasi Bot ❎

Sanksi : *Warn/Soft Block 🚧*

╔════════❒
❒ ✒[*OWNER MENU*]
❒ ${prefix}bc
❒ ${prefix}bcgc
❒ ${prefix}join
❒ ${prefix}leave
❒ ${prefix}block
❒ ${prefix}unblock
❒ ${prefix}setppbot
❒ ${prefix}self
❒ ${prefix}public
❒ ${prefix}eval
╚════════
  
╔════════❒
❒ ✒[*GROUP MENU*]
❒ ${prefix}antilink
❒ ${prefix}antidelete
❒ ${prefix}antiviewone
❒ ${prefix}linkgroup
❒ ${prefix}revoke
❒ ${prefix}kick
❒ ${prefix}add
❒ ${prefix}promote
❒ ${prefix}demote
❒ ${prefix}setname
❒ ${prefix}setdesk
❒ ${prefix}setppgrup
❒ ${prefix}tagall
❒ ${prefix}hidetag
❒ ${prefix}ephemeral
╚════════
  
╔════════❒
❒ ✒[*CONVERT MENU*]
❒ ${prefix}sticker
❒ ${prefix}toimg
❒ ${prefix}tovideo
❒ ${prefix}toaudio
❒ ${prefix}tomp3
❒ ${prefix}tovn
❒ ${prefix}togif
❒ ${prefix}tourl
❒ ${prefix}removebg
╚════════

╔════════❒
❒ ✒[*RANDOM MENU*]
❒ ${prefix}pinterest
❒ ${prefix}wallpaper
❒ ${prefix}quotesanime
❒ ${prefix}ai
❒ ${prefix}wikimedia
╚════════

╔════════❒
❒ ✒[*OTHER MENU*]
❒ ${prefix}delete
❒ ${prefix}donasi
❒ ${prefix}sewa
❒ ${prefix}sc
❒ ${prefix}afk
❒ ${prefix}owner
❒ ${prefix}ping
❒ ${prefix}menu / ${prefix}help / ${prefix}?
╚════════

╔════════❒
❒ ✒[*DOWNLOAD MENU*]
❒ ${prefix}play
❒ ${prefix}yts
❒ ${prefix}ytmp3
❒ ${prefix}ytmp4
╚════════
╔════════❒
❒ ✒ [*ANIME MENU*]
❒ ${prefix}waifu
❒ ${prefix}waifu2
❒ ${prefix}shina
❒ ${prefix}toukachan
❒ ${prefix}yumeko
❒ ${prefix}yuri
❒ ${prefix}mikasa
❒ ${prefix}asuna
❒ ${prefix}sagiri
❒ ${prefix}itachi
❒ ${prefix}elaina
❒ ${prefix}madara
❒ ${prefix}umaru
❒ ${prefix}nezuko
❒ ${prefix}nsfwloli
╚════════
╔════════❒
❒ ✒ [*EPHOTO MENU*]
❒ ${prefix}ytgoldbutton
❒ ${prefix}iggoldbutton
❒ ${prefix}fbgoldbutton
❒ ${prefix}twittergoldbutton
❒ ${prefix}ytsilverbutton
❒ ${prefix}igsilverbutton
❒ ${prefix}fbsilverbutton
❒ ${prefix}twittersilverbutton
╚════════
╔════════❒
❒ ✒ [*ISLAM MENU*]
❒ ${prefix}kisahnabi (Nama Nabi)
╚════════

╔════════❒
❒ ✒ [*MAKER MENU*]
❒ ${prefix}candy
❒ ${prefix}3dchristmas
❒ ${prefix}sparklechristmas
❒ ${prefix}holograpic
❒ ${prefix}deepsea
❒ ${prefix}scifi
❒ ${prefix}rainbow
❒ ${prefix}waterpipe
❒ ${prefix}spooky
❒ ${prefix}karbon
❒ ${prefix}neonlight2
❒ ${prefix}pencil
❒ ${prefix}circuit
❒ ${prefix}discovery
❒ ${prefix}metalic
❒ ${prefix}fiction
❒ ${prefix}demon
❒ ${prefix}3dbox
❒ ${prefix}transformer
❒ ${prefix}berry
❒ ${prefix}thunder
❒ ${prefix}magma
❒ ${prefix}3dstone
❒ ${prefix}greenneon
❒ ${prefix}neonlight
❒ ${prefix}glitch
❒ ${prefix}harrypotter
❒ ${prefix}dropwater
❒ ${prefix}toxic
❒ ${prefix}lava
❒ ${prefix}rock
❒ ${prefix}bloodglas
❒ ${prefix}hallowen
❒ ${prefix}darkgold
❒ ${prefix}brokenglass
❒ ${prefix}pepercut
❒ ${prefix}lion2
❒ ${prefix}watercolor
❒ ${prefix}multicolor
❒ ${prefix}neondevil
❒ ${prefix}underwater
❒ ${prefix}graffitibike
❒ ${prefix}3davengers
❒ ${prefix}snow
❒ ${prefix}cloud
❒ ${prefix}honey
❒ ${prefix}ice
❒ ${prefix}fruitjuice
❒ ${prefix}biscuit
❒ ${prefix}wood
❒ ${prefix}whitebear
❒ ${prefix}chocolate
❒ ${prefix}strawbery
❒ ${prefix}matrix
❒ ${prefix}blood
❒ ${prefix}joker
❒ ${prefix}wicker
❒ ${prefix}firework
❒ ${prefix}skeleton
❒ ${prefix}blackpink
❒ ${prefix}sand
❒ ${prefix}give
❒ ${prefix}1917
❒ ${prefix}leaves
╚════════
╔════════❒
❒ ✒ [*Sticker Menu*]
❒ ${prefix} patrick
❒ ${prefix} dogesticker
❒ ${prefix} gura
❒ ${prefix} paimon
❒ ${prefix} mukelu
❒ ${prefix} lovesticker
❒ ${prefix} sanime
╚════════
╔════════❒
❒ ✒[*Sound Menu*]
❒ ${prefix} sound1
❒ ${prefix} sound2
❒ ${prefix} sound3
❒ ${prefix} sound4
❒ ${prefix} sound5
❒ ${prefix} sound6
❒ ${prefix} sound7
❒ ${prefix} sound8
❒ ${prefix} sound9
❒ ${prefix} sound10
❒ ${prefix} sound11
❒ ${prefix} sound12
❒ ${prefix} sound13
❒ ${prefix} sound14
❒ ${prefix} sound15
❒ ${prefix} sound16
❒ ${prefix} sound17
❒ ${prefix} sound18
❒ ${prefix} sound19
❒ ${prefix} sound20
❒ ${prefix} sound21
❒ ${prefix} sound22
❒ ${prefix} sound23
❒ ${prefix} sound24
❒ ${prefix} sound25
❒ ${prefix} sound26
❒ ${prefix} sound27
❒ ${prefix} sound28
❒ ${prefix} sound29
❒ ${prefix} sound30
❒ ${prefix} sound31
❒ ${prefix} sound32
❒ ${prefix} sound33
❒ ${prefix} sound34
❒ ${prefix} sound35
❒ ${prefix} sound36
❒ ${prefix} sound37
❒ ${prefix} sound38
❒ ${prefix} sound39
❒ ${prefix} sound40
❒ ${prefix} sound41
❒ ${prefix} sound42
❒ ${prefix} sound43
❒ ${prefix} sound44
❒ ${prefix} sound45
❒ ${prefix} sound46
❒ ${prefix} sound47
❒ ${prefix} sound48
❒ ${prefix} sound49
❒ ${prefix} sound50
❒ ${prefix} sound51
❒ ${prefix} sound52
❒ ${prefix} sound53
❒ ${prefix} sound54
❒ ${prefix} sound55
❒ ${prefix} sound56
❒ ${prefix} sound57
❒ ${prefix} sound58
❒ ${prefix} sound59
❒ ${prefix} sound60
❒ ${prefix} sound61
❒ ${prefix} sound62
❒ ${prefix} sound63
❒ ${prefix} sound64
❒ ${prefix} sound65
❒ ${prefix} sound66
❒ ${prefix} sound67
❒ ${prefix} sound68
❒ ${prefix} sound69
❒ ${prefix} sound70
❒ ${prefix} sound71
❒ ${prefix} sound72
❒ ${prefix} sound73
❒ ${prefix} sound74
❒ ${prefix} sound75
❒ ${prefix} sound76
❒ ${prefix} sound77
❒ ${prefix} sound78
❒ ${prefix} sound79
❒ ${prefix} sound80
❒ ${prefix} sound81
❒ ${prefix} sound82
❒ ${prefix} sound83
❒ ${prefix} sound84
❒ ${prefix} sound85
❒ ${prefix} sound86
❒ ${prefix} sound87
❒ ${prefix} sound88
❒ ${prefix} sound89
❒ ${prefix} sound90
❒ ${prefix} sound91
❒ ${prefix} sound92
❒ ${prefix} sound93
❒ ${prefix} sound94
❒ ${prefix} sound95
❒ ${prefix} sound96
❒ ${prefix} sound97
❒ ${prefix} sound98
❒ ${prefix} sound99
❒ ${prefix} sound100
❒ ${prefix} sound101
❒ ${prefix} sound102
❒ ${prefix} sound103
❒ ${prefix} sound104
❒ ${prefix} sound105
❒ ${prefix} sound106
❒ ${prefix} sound107
❒ ${prefix} sound108
❒ ${prefix} sound109
❒ ${prefix} sound110
❒ ${prefix} sound111
❒ ${prefix} sound112
❒ ${prefix} sound113
❒ ${prefix} sound114
❒ ${prefix} sound115
❒ ${prefix} sound116
❒ ${prefix} sound117
❒ ${prefix} sound118
❒ ${prefix} sound119
❒ ${prefix} sound120
❒ ${prefix} sound121
❒ ${prefix} sound122
❒ ${prefix} sound123
❒ ${prefix} sound124
❒ ${prefix} sound125
❒ ${prefix} sound126
❒ ${prefix} sound127
❒ ${prefix} sound128
❒ ${prefix} sound129
❒ ${prefix} sound130
❒ ${prefix} sound131
❒ ${prefix} sound132
❒ ${prefix} sound133
❒ ${prefix} sound134
❒ ${prefix} sound135
❒ ${prefix} sound136
❒ ${prefix} sound137
❒ ${prefix} sound138
❒ ${prefix} sound139
❒ ${prefix} sound140
❒ ${prefix} sound141
❒ ${prefix} sound142
❒ ${prefix} sound143
❒ ${prefix} sound144
❒ ${prefix} sound145
❒ ${prefix} sound146
❒ ${prefix} sound147
❒ ${prefix} sound148
❒ ${prefix} sound149
❒ ${prefix} sound150
❒ ${prefix} sound151
❒ ${prefix} sound152
❒ ${prefix} sound153
❒ ${prefix} sound154
❒ ${prefix} sound155
❒ ${prefix} sound156
❒ ${prefix} sound157
❒ ${prefix} sound158
❒ ${prefix} sound159
❒ ${prefix} sound160
❒ ${prefix} sound161
╚════════

❒ Big Thanks to :❒
❒ Allah Swt
❒ Nabi Muhammad SAW
❒ My parents
❒ Deff (me)
❒ Erlan (penyedia api + mastahh)
❒ Soneltzy (my friends + mastahh)
❒ Fandy (penyedia base + mastahh)
❒ Adiwajhising (penyedia module)
❒ And All creator Bot
 `
  ichi.sendMessageImg(m.chat, menu, global.ownerName, global.thumb, but, global.thumb)
  }
  break
case 'donasi': case 'sewa': case 'sewabot': {
  let donasi = `Scan QR Above To Donate

Rental Bot Prices :
💰 10k/week
💰 25k/month
💰 100k/year`
  let but = [{"quickReplyButton": {"displayText": "Owner 👦","id": "owner"}}]
  ichi.sendButtonImg(m.chat, donasi, global.ownerName, global.donasi, but, global.donasi)
  }
  break
case 'sc': case 'sourcecode': case 'script': {
  m.reply('*Script Berasal Dari :* https://github.com/nzrlafndi/ichigo-kurosaki\n\nJangan Lupa Bintang nya!')
  }
  break
case 'owner': {
  ichi.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break

//Owner Menu
case 'bcgc': case 'bcgroup': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let getGroups = await ichi.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(i, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(i, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await ichi.sendButtonText(i, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await ichi.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'join': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
  m.reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await ichi.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'leave': {
  if (!isOwner) return m.reply(mess.botOwner)
  await ichi.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) return m.reply(`Kirim/m.reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await ichi.downloadAndSaveMediaMessage(qmsg)
  let botNumber = await ichi.user.jid
  let { img } = await pepe(media)
  await ichi.query({
	tag: 'iq',
	attrs: {
	to: botNumber,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
		tag: 'picture',
		attrs: { type: 'image' },
		content: img
	}
	]
	})
	m.reply(`Sukses mengganti PP Bot`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.public = true
  m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.self = false
  m.reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

//Group Menu
case 'antilink':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.group[m.chat].antilink = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.group[m.chat].antilink = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break

case 'antidelete':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antidelete) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.group[m.chat].antidelete = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antidelete) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.group[m.chat].antidelete = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break

case 'antiviewone':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antiviewone) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.group[m.chat].antiviewone = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antiviewone) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.group[m.chat].antiviewone = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break

case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await ichi.groupInviteCode(m.chat)
  ichi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await ichi.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return 'Text ?'
  await ichi.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return 'Text ?'
  await ichi.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await ichi.downloadAndSaveMediaMessage(qmsg)
  let { img } = await pepe(media)
  await ichi.query({
	tag: 'iq',
	attrs: {
	to: m.chat,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
	tag: 'picture',
	attrs: { type: 'image' },
    content: img
	}
	]
	})
	m.reply(`Admin telah mengganti Icon Group!`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
    }
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  ichi.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  ichi.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukkan value enable/disable')
  if (args[0] === 'enable') {
  await ichi.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await ichi.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await ichi.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await ichi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await ichi.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await ichi.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttons, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break

//Convert Menu
case 'sricker': case 's': case 'stickergif': case 'sgif': {
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                 m.reply(mess.wait)
                 if (/image/.test(mime)) {
                 let media = await quoted.download()
                 let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else if (/video/.test(mime)) {
                 if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 10 detik!')
                 let media = await quoted.download()
                 let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else {
                 throw m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                 }
                 }
                 break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	let remobg = require('remove.bg')
	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	hmm = await './src/remobg-' + getRandom('')
	localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
	console.log(localFile)
	outputFile = await './src/hremo-' + getRandom('.png')
	m.reply(mess.wait)
	try {
		remobg.removeBackgroundFromImageFile({
			path: localFile,
			apiKey: apinobg,
			size: "regular",
			type: "auto",
			scale: "100%",
			outputFile
		}).then(async (result) => {
			//    console.log(result)
			console.log(`File saved to ${outputFile}`);
			await ichi.sendMessage(m.chat, {
				image: fs.readFileSync(outputFile),
				caption: "success"
			}, {
				quoted: m
			})
			const base64img = result.base64img;
			await sleep(7000)
			await fs.unlinkSync(localFile)
			await fs.unlinkSync(outputFile)
		}).catch((errors) => {
			console.log(JSON.stringify(errors));
		});
	} catch (err) {
		m.reply(util.format(err))
		await fs.unlinkSync(localFile)
	}
}
break

		            case 'estetik': {
		            	if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	let remobg = require('remove.bg')
		            	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
		            	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]

		            	hmm = await './src/remobg-' + getRandom('')
		            	localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
		            	outputFile = './src/hremo-' + getRandom('.png')
		            	m.reply(mess.wait)
		            	try {
		            		remobg.removeBackgroundFromImageFile({
		            			path: localFile,
		            			apiKey: apinobg,
		            			size: "regular",
		            			type: "auto",
		            			scale: "100%",
		            			outputFile
		            		}).then(async result => {
		            			console.log(outputFile)
		            			let tes = await fs.readFileSync(outputFile)
		            			let anu = await TelegraPh(outputFile)
		            			console.log(anu)
		            			let hsil = await getBuffer(`https://oni-chan.my.id/api/Fmake/estetik?picturl=${anu}`)
		            			await sleep(9000)
		            			await ichi.sendMessage(m.chat, {
		            				image: hsil,
		            				caption: "success"
		            			}, {
		            				quoted: m
		            			})
		            			await sleep(15000)
		            			await fs.unlinkSync(localFile)
		            			await fs.unlinkSync(outputFile)
		            		})
		            	} catch (err) {
		            		m.reply(util.format(err))
		            		await fs.unlinkSync(localFile)
		            	}
		            }
		            break

		case 'ktpmaker': {
			if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
			get_args = args.join(" ").split("|")
			nik = get_args[0]
			if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
			prov = get_args[1]
			if (!prov) return m.reply('probinsi mana kak')
			kabu = get_args[2]
			if (!kabu) return m.reply('kabupaten mana kak')
			name = get_args[3]
			if (!name) return m.reply('nama nya siapa kak')
			ttl = get_args[4]
			if (!ttl) return m.reply('tempat tanggal lahir nya kak')
			jk = get_args[5]
			if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
			jl = get_args[6]
			if (!jl) return m.reply('alamat rumah nya mana kak')
			rtrw = get_args[7]
			if (!rtrw) return m.reply('RT / RW berapa kak')
			lurah = get_args[8]
			if (!lurah) return m.reply('kelurahan mana kak')
			camat = get_args[9]
			if (!camat) return m.reply('kecamatan mana kak')
			agama = get_args[10]
			if (!agama) return m.reply('agama nya apa kak')
			nikah = get_args[11]
			if (!nikah) return m.reply('status belum ada')
			kerja = get_args[12]
			if (!kerja) return m.reply('pekerjaan belum ada')
			warga = get_args[13]
			if (!warga) return m.reply('region belum ada')
			until = get_args[14]
			if (!until) return m.reply('waktu berlaku belum ada')
			gd = get_args[15]
			if (!gd) return m.reply('golongan darah belum ada')
			img = get_args[16]
			if (!img) return m.reply('url image belum ada')
      m.reply(mess.wait)
			bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
			console.log(bikin)
			ardaktp = await getBuffer(bikin)
		  await sleep(8000)
			await ichi.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
		//	await sleep(5000)
		}
			break;

case 'toimage': case 'toimg': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return err
  let buffer = fs.readFileSync(ran)
  ichi.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await ichi.downloadMediaMessage(qmsg)
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await ichi.downloadMediaMessage(qmsg)
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ichi.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await ichi.downloadMediaMessage(qmsg)
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  ichi.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  }
  break
case 'togif': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
case 'swm': case 'wm': case 'take': case 'colong': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  if (!text) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  if (!text.includes('|')) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  m.reply (mess.wait)
  if (/image/.test(mime)) {
  let media = await ichi.downloadMediaMessage(qmsg)
  let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if (qmsg.seconds > 11) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  let media = await ichi.downloadMediaMessage(qmsg)
  let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else {
  m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  }
  }
  break

//Random Menu
case 'pinterest': {
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  }
  break
case 'quotesanime': {
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  }
  break
case 'wikimedia': {
  if (!text) return 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break

//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `---- Youtube Downloader -----
  
📄 Judul : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP4
📮 Resolusi : ${args[1] || '360p'}`
  ichi.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
  }
  break
case'ytmp3': {
			if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			axios
				.get(`${lann}/api/download/ytmp3/2?url=${args[0]}&apikey=${lannkey}`)
				.then(({ data }) => {
					var caption = `❖ Title: *${data.result.title}*\n`
					caption += `❖ Size: *${data.result.size}*\n`
					caption += `❖ Duration: *${data.result.duration}*\n`
					caption += `*Mohon Tunggu Sebentar *`
					ichi.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						ichi.sendMessage(from, { document: { url: data.result.url }, mimetype: 'audio/mpeg', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
				}
			break
case 'yts': case 'ytsearch': {
  m.reply(mess.wait)
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  ichi.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
  }
  break
case 'play':
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
*📄 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*👨‍🎤 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  break
//Anime
         case 'elaina':
         case 'madara':
         case 'itachi':
         case 'shina':
         case 'umaru':
         case 'nezuko':
         case 'toukachan':
         case 'nsfwloli':
         case 'yuri':
         case 'asuna':
         case 'mikasa':
         case 'sagiri':
         case 'miku':
         case 'yumeko':
         case 'waifu':
         case 'waifu2':
         
          m.reply(mess.wait)
         let anime = await getBuffer(api('lannn', `/api/anime/${command}`, 'apikey'))
         var butnime = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
         ichi.sendMessage(m.chat, { image: anime, caption: `Source Code https://api.lannn.me/nfsw`, buttons: butlan }, { quoted:m })
         break
//cecan
         case 'china':
        case 'vietnam':
        case 'thailand':
        case 'indonesia':
        case 'korea':
        case 'jepang'
        case 'justinaxie':
        case 'ryujin':
        case 'hijaber':
        
        m.reply(mess.wait)
         let china = await getBuffer(api('lannn', `/api/cecan/${command}`, 'apikey'))
         var butlann = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
         ichi.sendMessage(m.chat, { image: china, caption: `Source Code https://api.lannn.me/cecan`, buttons: butlan }, { quoted:m })
         break
//Islami 
       case 'niatsubuh':
case 'niatdzuhur':
case 'niatashar':
case 'niatmaghrib':
case 'niatisya':
m.reply(mess.wait)
let niat = await fetchJson(api('lannn', `/api/muslim/${command}`, {}, 'apikey'))
let sholat = `Bacaan Solat ${command}
 
🆔 Id    : ${niat.result.id}
📛 Nama : ${niat.result.name}
👳 Arab : ${niat.result.arabic}
🔤 Latin : ${niat.result.latin}
🇮🇩 Indonesia : ${niat.result.terjemahan}
`
m.reply(sholat)
break
case 'kisahnabi':
 if (!text) return m.reply(`Mau Kisah Nabi Siapa?\n\nList Nama Nabi :\n1. adam\n2. idris\n3. nuh\n4. hud\n5. saleh\n6. ibrahim\n7. luth\n8. ismail\n9. ishaq\n10. yaqub\n11. yusuf\n12. ayub\n13. syuaib\n14. musa\n15. harun\n16. dzulkifli\n17. daud\n18. sulaiman\n19. ilyas\n20. ilyasa\n21. yunus\n22. zakaria\n23. yahya\n24. musa\n25. muhammad\n\nExample: ${prefix+command} Muhammad`)
let kisah = await fetchJson(api('lannn', `/api/muslim/${command}`, { nabi: text }, 'apikey'))
let nabi =  `Kisah Nabi ${text}

📛 Nama : ${kisah.result.name}
📆 Kelahiran : ${kisah.result.kelahiran}
🧓 Usia : ${kisah.result.wafat_usia}
🏜️ Tempat : ${kisah.result.singgah}
📕 Cerita : ${kisah.result.kisah}
`
m.reply(nabi)
break
//Ephoto
case 'ytgoldbutton' :
case 'iggoldbutton':
case 'twtgoldbutton':
case 'fbgoldbutton':
case 'ytsilverbutton':
case 'igsilverbutton':
case 'twtsilverbutton':
case 'fbsilverbutton':
          if (!text) return m.reply(`Example : ${prefix + command} ${global.ownername}`) 
 m.reply(mess.wait)
 let lann = await getBuffer(api('lannn', '/api/ephoto/${command}', { text: text }, 'apikey'))
ichi.sendMessage(m.chat, { image: lann, caption: `Source Code https://api.lannn.me/ephoto` }, { quoted: m })
break

//Maker 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 if (!q) return m.reply(`Example : ${prefix + command} ${global.ownername}`) 
 m.reply(mess.wait)
 let link
 if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
 if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
 if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
 if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
 if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
 if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
 if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
 if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
 if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
 if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
 if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
 if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
 if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
 if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
 if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
 if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
 if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
 if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
 if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
 if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
 if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
 if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
 if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
 if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
 if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
 if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
 if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
 if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
 if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
 if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
 if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
 if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
 if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
 if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
 if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
 if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
 if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
 if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
 if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
 if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
 if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
 if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
 if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
 if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
 if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
 if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
 if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
 if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
 if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
 if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
 if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
 if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
 if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
 if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
 if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
 if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
 if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
 if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
 if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
 if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
 if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
 if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
 if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
 if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
 if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
 let anu = await maker.textpro(link, q)
 ichi.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
 }
 break
 ///Sticker
case 'patrick': case 'patricksticker': case 'petrik': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'dogesticker': case 'dogestick': case 'doge': case 'domge': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker': case 'lovestick' : case 'slove': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura': case 'gurastick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'paimon': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'sanime': case 'animestick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'mukelu': case 'lu': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ichi.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'quotesanime': case 'quoteanime': {
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
footer: esce,
buttons: buttons,
headerType: 2
}
ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//sound
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
tio_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ichi.sendMessage(m.chat, { audio: tio_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
break
//Nsfw
 case 'ahegao':
         case 'bdsm':
         case 'ass':
         case 'blowjob':
         case 'cocukold':
         case 'cum':
         case 'femdom':
         case 'foot':
         case 'hentai':
         case 'gifs':
         case 'jahy':
         case 'orgy':
         case 'nekopoi':
         case 'nekopoi2':
         case 'panties':
         case 'pussy':
         case 'yuri':
         case 'zetai':
         
          m.reply(mess.wait)
         let nsfw = await getBuffer(api('lannn', `/api/nsfw/${command}`, {}, 'apikey'))
         var butnsfw = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
         ichi.sendMessage(m.chat, { image: nfsw, caption: `Source Code https://api.lannn.me/nfsw`, buttons: butlan }, { quoted:m })
         break
case 'ai': case 'openai': {
if (!text) throw 'Masukkan text!'
var api = await fetchJson(`https://mfarels.my.id/api/openai?text=${text}`)
ichi.sendMessage(m.chat, { text: api.result }, {quoted: ftoko })
}
break
//primbon
 case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6282221792667`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nomor HP :* ${anu.message.nomer_hp}\n *»* *Angka Shuzi :* ${anu.message.angka_shuzi}\n *»* *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *»* *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Mimpi :* ${anu.message.mimpi}\n *»* *Arti :* ${anu.message.arti}\n *»* *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama Anda :* ${anu.message.nama_anda.nama}\n *»* *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *»* *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama Anda :* ${anu.message.nama_anda.nama}\n *»* *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *»* *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama Suami :* ${anu.message.suami.nama}\n *»* *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *»* *Nama Istri :* ${anu.message.istri.nama}\n *»* *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama Anda :* ${anu.message.nama_anda.nama}\n *»* *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *»* *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *»* *Sisi Positif :* ${anu.message.sisi_positif}\n *»* *Sisi Negatif :* ${anu.message.sisi_negatif}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + command} Tio Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Arti :* ${anu.message.arti}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Life Path :* ${anu.message.life_path}\n *»* *Destiny :* ${anu.message.destiny}\n *»* *Destiny Desire :* ${anu.message.destiny_desire}\n *»* *Personality :* ${anu.message.personality}\n *»* *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Asep|Wiwin`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
ichi.sendImage(m.chat,  anu.message.gambar, ` *»* *Nama Anda :* ${anu.message.nama_anda}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan}\n *»* *Sisi Positif :* ${anu.message.sisi_positif}\n *»* *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Tanggal Pernikahan :* ${anu.message.tanggal}\n *»* *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Lahir :* ${anu.message.hari_lahir}\n *»* *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Lahir :* ${anu.message.hari_lahir}\n *»* *Rezeki :* ${anu.message.rejeki}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Lahir :* ${anu.message.hari_lahir}\n *»* *Pekerjaan :* ${anu.message.pekerjaan}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Analisa :* ${anu.message.analisa}\n *»* *Angka Akar :* ${anu.message.angka_akar}\n *»* *Sifat :* ${anu.message.sifat}\n *»* *Elemen :* ${anu.message.elemen}\n *»* *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Analisa :* ${anu.message.analisa}\n *»* *Sektor :* ${anu.message.sektor}\n *»* *Elemen :* ${anu.message.elemen}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendImage(m.chat, anu.message.image, ` *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Simbol Tarot :* ${anu.message.simbol_tarot}\n *»* *Arti :* ${anu.message.arti}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Tio,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tahun_lahir}\n *»* *Gender :* ${anu.message.jenis_kelamin}\n *»* *Angka Kua :* ${anu.message.angka_kua}\n *»* *Kelompok :* ${anu.message.kelompok}\n *»* *Karakter :* ${anu.message.karakter}\n *»* *Sektor Baik :* ${anu.message.sektor_baik}\n *»* *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Kala Tinantang :* ${anu.message.kala_tinantang}\n *»* *Info :* ${anu.message.info}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Info :* ${anu.message.info}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Hari Lahir :* ${anu.message.hari_lahir}\n *»* *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *»* *Hari Naas :* ${anu.message.hari_naas}\n *»* *Info :* ${anu.message.catatan}\n *»* *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Hari Lahir :* ${anu.message.hari_lahir}\n *»* *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *»* *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Hari Lahir :* ${anu.message.hari_lahir}\n *»* *tanggal Lahir :* ${anu.message.tgl_lahir}\n *»* *Arah Rezeki :* ${anu.message.arah_rejeki}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} Tio,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Tanggal :* ${anu.message.tanggal}\n *»* *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *»* *Watak Hari :* ${anu.message.watak_hari}\n *»* *Naga Hari :* ${anu.message.naga_hari}\n *»* *Jam Baik :* ${anu.message.jam_baik}\n *»* *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Tio, 7,7,2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Tio, 7,7,2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12,1,2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
ichi.sendText(m.chat, ` *»* *Zodiak :* ${anu.message.zodiak}\n *»* *Nomor :* ${anu.message.nomor_keberuntungan}\n *»* *Aroma :* ${anu.message.aroma_keberuntungan}\n *»* *Planet :* ${anu.message.planet_yang_mengitari}\n *»* *Bunga :* ${anu.message.bunga_keberuntungan}\n *»* *Warna :* ${anu.message.warna_keberuntungan}\n *»* *Batu :* ${anu.message.batu_keberuntungan}\n *»* *Elemen :* ${anu.message.elemen_keberuntungan}\n *»* *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n *»* *Catatan :* ${anu.message.catatan}`, m)
}
break       
//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
//  m = String(err)
  m.reply(require('util').format(err));
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
    
  } catch (err) {
    console.log("error di bagian ichi.js "+util.format(err))
//  m.reply(util.format(err))
  }

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
