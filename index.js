const fetch = require('node-fetch');

async function getVotes(value) {
    try {
        const data = await fetch(`https://botsparadiscord.com/bots/${value}/`)
        const text = await data.text()
        const [, allvotes] = /title="(\d+) votos"/g.exec(text) || [, undefined]
        return allvotes
    
    } catch (err) {
        throw new Error("Não encontrei nada.")
    }
}

module.exports = getVotes
