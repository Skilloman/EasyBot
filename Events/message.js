module.exports = (client, message) => {
    if (message.author.bot) return
    if (!message.guild) return message.channel.send('Je ne gère pas les DM :)')
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    if (message.channel.id === '613362411960926211') {
        let a = message.content
        Number(a)
        if (isNaN(a)) return message.delete()
    }

    const cmd = client.commands.get(command)
    if(!cmd) return undefined
    cmd.run(client, message, args)
    // if(client.commands.has(command)) client.commands.get(command)(client, message, args)
}