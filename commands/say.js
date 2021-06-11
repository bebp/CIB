module.exports = {
    name: 'say',
    discription: 'Repeats a user message.',
    execute(message, args){
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}