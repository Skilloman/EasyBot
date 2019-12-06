const DISCORD = require('discord.js'), fetch = require('node-fetch')
exports.run = (client, message) => {
    let args = message.content.split(' ')
    if (!args[1]) return message.channel.send('Tu cherche quel mot ?')
    let url = `http://api.urbandictionary.com/v0/define?term=${args[1]}`
    fetch(url, {
            json: true
        })
        .then(res => res.json())
        .then((json) => {
            if(json.list.length <= 0) return message.channel.send('Pas de resultats')
            let word = json.list[0].word
            let def = json.list[0].definition
            let author = json.list[0].author
            let example = json.list[0].example
            let up = json.list[0].thumbs_up
            let down = json.list[0].thumbs_down
            let writeDate = json.list[0].written_on

            let embed = new DISCORD.RichEmbed()
                .setColor('BLUE')
                .setThumbnail('https://i.imgur.com/VFXr0ID.jpg')
                .setAuthor('Skillo', message.author.avatarURL, message.author.displayAvatarURL)
                .setTitle(`__**Résultat de la recherche du mot ${word}:**__`)
                .setDescription(`L'auteur de la définition est ${author}`)
                .addField('() __Définition :__ ', def)
                .addField('() __Exemple :__', example)
                .addField('() __Vote :__', `👍 : ${up} | 👎 : ${down}`)
                .setFooter(`Posté le`)
                .setTimestamp(writeDate)
            message.channel.send(embed)
        })
}

exports.help = {
    name: "udef"
}
