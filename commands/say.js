module.exports = {
    name: 'say',
    discription: 'Repeats a user message.',
    execute(message, args){
        if (message.channel.type === "dm"){
            const sayMessage = args.join(" ");
            message.author.send(sayMessage);
        }else{
            const sayMessage = args.join(" ");
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);
        }
    }
}