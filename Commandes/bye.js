exports.run = (client, message) => {
    message.delete()
    message.channel.send(`:wave: | ${message.author.username} *vous dit aurevoir !*`)
}

exports.help = {
    name: "bye"
}