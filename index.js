const fetch = require('node-fetch');

function getVotes(value) {
    try {
        const data = fetch(`https://botsparadiscord.com/bots/${value}/`)
        const text = data.text()
        const [, allvotes] = /title="(\d+) votos"/g.exec(text) || [, undefined]
        return allvotes
    
    } catch (err) {
        throw new Error("Dados não encontrados")
    }
}

module.exports = {
    getVotes
}
