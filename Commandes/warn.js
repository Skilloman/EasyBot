const DISCORD = require('discord.js')
exports.run = (client, message) => {
    let args = message.content.split(' ')
    //  .warn @user raison
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.channel.send('Tu n\'as pas les permissions')
    let wUser = message.mentions.users.first();
    if (!wUser) return message.channel.send("Mentionne un utilisateur !\nUsage : `.warn @user [Raison:Optionelle]`")
    let wRaison = args.slice(2, args.length).join(' ')
    if (wRaison) {
        let wEmbed = new DISCORD.RichEmbed()
            .setTitle("Warn !")
            .setColor('RED')
            .setDescription(`Attention tu as été  warn sur le serveur \`${message.guild.name}\``)
            .addField('__Auteur du warn__ :', message.author.tag)
            .addField('__Raison du warn__ : ', wRaison)
        wUser.send(wEmbed).then(
            message.channel.send("`" + wUser.tag + '`à bien  été  avertit')
        )
    } else if (!wRaison) {
        wRaison = "Aucune"
        let wEmbed = new DISCORD.RichEmbed()
            .setTitle("Warn !")
            .setColor('RED')
            .setDescription(`Attention tu as été warn sur le serveur \`${message.guild.name}\``)
            .addField('__Auteur du warn__:', message.author.tag)
            .addField('__Raison du warn__ : ', wRaison)
        wUser.send(wEmbed).then(
            message.channel.send("`" + wUser.tag + '`à bien été avertit')
        )
    }
}

exports.help = {
    name: "warn"
}