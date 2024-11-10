import path from 'path'

const timeZone = 'Asia/Jakarta'

const tempName = 'temp'
global.tempDir = path.resolve(new URL('.', import.meta.url).pathname, tempName)

const owner = [
    ['6289518562932', 'Kaze']
]

const defaultPrefix = ['/', '!', '#', '.', '-', '🗿']

export { timeZone, owner, defaultPrefix }
