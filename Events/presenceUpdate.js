module.exports = (client, oM, nM) => {
    if (oM.presence.status === nM.presence.status) return
    let LaGuild = client.guilds.get('558972377489342474') // 419177582517420033
    let LeChannel = LaGuild.channels.get('648641039422455808') // 645276016914464798
    let allIdle = LaGuild.members.map((m) => m.presence.status === "idle").filter((value) => value === true).length
    let allDnd = LaGuild.members.map((m) => m.presence.status === "dnd").filter((value) => value === true).length
    let allOnline = LaGuild.members.map((m) => m.presence.status === "online").filter((value) => value === true).length
    let nombreDeGensEnLigne = allIdle + allOnline + allDnd
    LeChannel.edit({
        "name": `🔵 | Online : ${nombreDeGensEnLigne}`
    })
}