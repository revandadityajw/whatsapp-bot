import util from 'util'
import store from '../../lib/src/store.js'

export const cmd = {
    name: ['eval'],
    command: ['eval'],
    category: ['owner'],
    detail: {
        desc: 'Menjalankan evaluasi.',
        use: 'code'
    },
    setting: {
        isOwner: true
    },
    async start(context) {
        const { m, text, conn } = context
        if (!text) return

        let evalCmd
        try {
            evalCmd = /await/i.test(text)
                ? eval("(async () => { " + text + " })()")
                : eval(text)
        } catch (e) {
            m.reply(util.format(e)) 
            return
        }

        (async () => {
            try {
                const result = await evalCmd
                m.reply(util.format(result))
            } catch (err) {
                m.reply(util.format(err))
            }
        })()
    }
}