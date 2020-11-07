module.exports = {
    name: 'mc3',
    description: "send mc3.link! ",
    execute(message, args) {

        if (message.member.roles.cache.has('774353206184247328')) {
            message.channel.send('https://www.mc3.edu')

        } else {
            message.channel.send('Dont front, you aint got these permissions...');
        }

    }
}