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


// client.on('ready', () => require('./Events/ready.js')(client)) // Test : OK
// client.on('message', message => require('./Events/message.js')(client, message)) // Test
// client.on('guildMemberAdd', member => require('./Events/guildMemberAdd.js')(client, member)) // Test
// client.on('guildMemberRemove', member => require('./Events/guildMemberRemove')(client, member)) // Test
// client.on('guildMemberUpdate', (o, n) => require('./Events/guildMemberUpdate.js')(client, o, n)) // Test
// client.on('messageReactionAdd', (messageReaction, userAddReaction) => require('./Events/messageReactionAdd.js')(client, messageReaction, userAddReaction)) // Test
// client.on('presenceUpdate', (oM, nM) => require('./Events/presenceUpdate.js')(client, oM, nM)) // Test

client.login('J\'aime bien manger des pâtes au sucre')