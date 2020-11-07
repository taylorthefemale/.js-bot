module.exports = {
    name: 'ping',
    description: "this is a ping command dude, like really?",
    execute(message, args) {
        message.channel.send('I am not playing table top tennis with you bro');
    }
}