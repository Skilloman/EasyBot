exports.run = (client, message) => {
    let args = message.content.split(' ')
    args.shift()
    if(!args[1]) return message.channel.send('Entre un truc à chercher')
    message.channel.send('Hop cherche toi meme ! -->\n' + "https://www.google.com/search?q=" + args.join('+'))
}

exports.help = {
    name: "ggle"
}