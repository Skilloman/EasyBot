exports.run = (client, message) => {
    let auteurDuMessage = message.author
    if (!message.guild.member(auteurDuMessage).roles.has('558976951050829841')) return message.channel.send("Tu n'as pas le role modo")
    let userBan = message.guild.member(message.mentions.users.first())
    if (!userBan) return message.channel.send('Mentionne un utilisateur à kick')
    if (userBan.user.id === auteurDuMessage.id) return message.channel.send('Evite de te kick tout seul')
    userBan.kick()
        .then(
            message.channel.send('c bon jlé kick')
        )
        .catch((e) => console.error(e))
}

exports.help = {
    name: "kick"
}