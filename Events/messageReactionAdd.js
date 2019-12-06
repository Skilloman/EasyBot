module.exports = (client, messageReaction, userAddReaction) => {
    let authorr = messageReaction.message.author;
    if (!messageReaction.message.guild.member(authorr).roles.has('569290452587773963')) return
    if (!messageReaction.message.channel.id === "595988208496541717") return //593436047304687656
    if (!messageReaction.message.guild.member(userAddReaction).roles.has('558976951050829841')) return
    if (messageReaction.emoji.name === "👌") {
        messageReaction.message.guild.member(authorr).addRole('594679186879283200').then(
            authorr.send('Tu as été accepté dans le serveur Waked XY!'),
            messageReaction.message.guild.member(authorr).removeRole('569290452587773963') //569290452587773963
        ).catch((e) => console.error(e))
    } else if (messageReaction.emoji.name === "❌") {
        messageReaction.message.guild.member(authorr).kick().then(
            authorr.send('Tu as été refusé du serveur Waked XY !\nRetente t\'as chance en faisant une meilleur candidature (surtout en respectant le template !) :smile: --> https://discord.gg/RMXNHhU')
        ).catch((e) => console.error(e))
    }
}