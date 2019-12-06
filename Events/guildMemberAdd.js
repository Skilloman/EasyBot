module.exports = (client, member) => {
// Members Count : 
    if (member.guild.id != '558972377489342474') return
    let countChannel = member.guild.channels.find(c => c.id === '645276666435862558')
    if (!countChannel) return console.log('Error channel not found')
    countChannel.edit({
        name: `👤 | Membres : ${member.guild.members.size}`
    })

//AddRole & Message : 
    let aRole = member.guild.roles.find(r => r.id === "569290452587773963")
    let channel = member.guild.channels.find(c => c.id === "566722492991930380")
    member.addRole(aRole)
    channel.send(`
        Bienvenue <@${member.user.id}> sur le serveur de Waked XY,\nPour obtenir le role <@&594679186879283200> remplis ta candidature dans le channel <#595988208496541717>\nLe template de candidature est dans les messages épinglés de ce channel (<#566722492991930380>),\nN'oublies pas de lire les <#594126928852549635>
    `)
}