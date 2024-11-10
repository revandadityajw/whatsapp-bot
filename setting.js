import path from 'path'

const timeZone = 'Asia/Jakarta'

const tempName = 'temp'
global.tempDir = path.resolve(new URL('.', import.meta.url).pathname, tempName)

const owner = [
    ['6282217590187', 'Kaze'],
    ['6282217590187']
]

const defaultPrefix = ['/', '!', '#', '.', '-', '🗿']

export { timeZone, owner, defaultPrefix }