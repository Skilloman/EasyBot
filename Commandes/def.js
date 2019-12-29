const DISCORD = require('discord.js'), fetch = require('node-fetch')
exports.run = (client, message) => {
    let apiKey = 'apiKey',
        mot = message.content.split(' ')[1],
        typeResult = 'definitions',
        url = `https://api.dicolink.com/v1/mot/${mot}/${typeResult}?limite=5&api_key=${apiKey}`
    if(!mot) return message.channel.send('Tu cherche quel mot ?')
    fetch(url, {
            json: true
        })
        .then(res => res.json())
        .then((json) => {
            if(json.error) return message.channel.send('Mot non trouvé')
            let nature = json[0].nature,
                source = json[0].source,
                theMot = json[0].mot,
                definition = json[0].definition

            let embed = new DISCORD.RichEmbed()
                .setTitle(`__**Résultat de la recherche ~>**__`)
                .setDescription(`**Définition pour le mot **>> ${theMot}`)
                .addField('__Nature :__', nature)
                .addField('__Source :__', source)
                .addField('__Définition :__', definition)
                .setColor('RANDOM')
                .setFooter('Powered by https://www.dicolink.com')
                .setThumbnail('https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/52602159_584477452053543_1527036378976616448_n.png?_nc_cat=108&_nc_oc=AQngzTBxet2F9VADQ5fGbwK5b0qb2rfIwUsUhAWI1W4HwvmcQxvlEOBAYBfWE3m6FD0&_nc_ht=scontent-cdt1-1.xx&oh=89a2310f850c3d543457fbd394337751&oe=5E0E5ECA')
            message.channel.send(embed)
        })
        .catch((e) => console.error(e))
}

exports.help = {
    name: "def"
}
