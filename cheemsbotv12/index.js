//base by 𝐀ᴅɪᴛʏᴀ-𝐗ᴅ
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Aditya.Editxz
//Instagram: i_aam_adi07
//Telegram: t.me/917318812338
//GitHub: @dibyenduaditya
//WhatsApp: +918653805156
//want more free bot scripts? join to my whatsapp group: https://chat.whatsapp.com/GyihEcvrZmnCnavFrel7YU

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
