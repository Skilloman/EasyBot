exports.run = async (client, message) => {
     let timeDuMsg = message.createdTimestamp
     await message.channel.send('Ping 🏓').then(
          (m) => m.edit(`🏓 Pong : ${m.createdTimestamp - timeDuMsg} ms`)
     )
}

exports.help = {
     name: "ping"
}