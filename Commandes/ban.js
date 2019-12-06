exports.run = (client, message) => {
    let auteurDuMessage = message.author
    if (!message.guild.member(auteurDuMessage).roles.has('558976951050829841')) return message.channel.send("Tu n'as pas le role modo")
    let userBan = message.guild.member(message.mentions.users.first())
    if(!userBan) return message.channel.send('Mentionne un utilisateur a ban')
    if(userBan.user.id === auteurDuMessage.id) return message.channel.send('Evite de te ban tout seul')
    userBan.ban()
        .then(
            message.channel.send('c bon jlé ban')
        )
        .catch((e) => console.error(e))
}

exports.help = {
    name: "ban"
}