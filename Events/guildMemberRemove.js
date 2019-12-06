module.exports = (client, member) => {
// Members Count : 
   if (member.guild.id != '558972377489342474') return
   let countChannel = member.guild.channels.find(c => c.id === '645276666435862558')
   if (!countChannel) return console.log('Erreur, channel not found')
   countChannel.edit({
       name: `👤 | Membres : ${member.guild.members.size}`
   })
}