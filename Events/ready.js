module.exports =  (client) => {
    console.log(`I'm ${client.user.tag}`)
    client.user.setActivity('and destroy your privacy', {
            type: 'WATCHING'
        })
    .catch(console.error)
}