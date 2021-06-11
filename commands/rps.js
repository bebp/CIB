module.exports = {
    name: 'rps',
    discription: 'Play rock paper scissors with a bot.',
    execute(message, args){
        var random = Math.floor(Math.random() * 3) + 1;
        const sayMessage = args.join(" ");
        //rock = 1
        //paper = 2
        //scissors = 3
        if(sayMessage == "rock" && random == 1){
            message.channel.send("Rock!")
            message.channel.send("We tied!")
        }else if(sayMessage =="rock" && random == 2){
            message.channel.send("Paper!")
            message.channel.send("I win!")
        }else if(sayMessage == "rock" && random == 3){
            message.channel.send("Scissors!")
            message.channel.send("WHAT? You WON?! I WANT A REMATCH!")
        }else if(sayMessage == "paper" && random == 1){
            message.channel.send("Rock!")
            message.channel.send("WHAT? You WON?! I WANT A REMATCH!")
        }else if(sayMessage == "paper" && random == 2){
            message.channel.send("Paper!")
            message.channel.send("We tied!")
        }else if(sayMessage == "paper" && random == 3){
            message.channel.send("Scissors!")
            message.channel.send("I win!")
        }else if(sayMessage == "scissors" && random == 1){
            message.channel.send("Rock!")
            message.channel.send("I win!")
        }else if(sayMessage == "scissors" && random == 2){
            message.channel.send("Paper!")
            message.channel.send("WHAT? You WON?! I WANT A REMATCH!")
        }else if(sayMessage == "scissors" && random == 3){
            message.channel.send("Scissors!")
            message.channel.send("We tied!")
        }else{
            message.channel.send("Please use rock, paper, or scissors. Make sure it's in all lowercase, because I'm retarded and don't know how to make it not case sensitive.")
        }

    }
}
