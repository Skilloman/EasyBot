const Discord = require('discord.js'), fs = require('fs'), nodeFetch = require('node-fetch')
const client = new Discord.Client()

client.commands = new Discord.Collection()
client.prefix = '.'

fs.readdir('./Commandes/', (err, files) => {
    if(err) return console.log(`Erreur : ${err}`)
    if(!files) return console.log('Aucun fichiers trouvé')

    files.forEach((file) => {
        if(!file.endsWith('.js')) return undefined
        let name = file.split('.')[0]
        let props = require(`./Commandes/${file}`)
        client.commands.set(name, props)
    })
    console.log(`--- ${files.length} commandes chargées ! ---`)
})

fs.readdir('./Events/', (err, files) => {
    if (err) return console.log(`Erreur : ${err}`)
    if (!files) return console.log('Aucun fichiers trouvé')

    files.forEach((file) => {
        if (!file.endsWith('.js')) return undefined
        let eventName = file.split('.')[0]
        let event = require(`./Events/${file}`)
        client.on(eventName, event.bind(null, client))
    })
    console.log(`--- ${files.length} events chargées ! ---`)
})

client.login('token')
