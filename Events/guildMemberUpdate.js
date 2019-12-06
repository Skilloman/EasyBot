module.exports = (client, o, n) => {
    let guild = client.guilds.get('558972377489342474') // 419177582517420033
    let channel = guild.channels.get('649009945135808592') // 645276016914464798
    let nombreMembre = guild.members.filter(m => m.roles.has('594679186879283200')).size
    channel.edit({
        'name': `✅ | @Membre : ${nombreMembre}`
    })
}