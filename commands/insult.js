module.exports = {
    name: 'insult',
    discription: 'This command will roast the living shit out of you.',
    execute(message, args){
        var random = Math.floor(Math.random() * 13) + 1;
        if(random == 1){
        message.channel.send("Hey loser! Where are you from? Are you from losertown? Because you are a loser!");
        }else if(random == 2){
            message.channel.send("If I wanted to kill myself, I would climb your ego then jump to your IQ."); 
        }else if(random == 3){
            message.channel.send("If your brain was dynamite, there wouldn’t be enough to blow your hat off.");
        }else if(random == 4){
            message.channel.send("You have so many gaps in your teeth it looks like your tongue is in jail.");
        }else if(random == 5){
            message.channel.send("you are poopy head");
        }else if(random == 6){
            message.channel.send("You're so full of shit, the toilet’s jealous.");
        }else if(random == 7){
            message.channel.send("My phone battery lasts longer than your relationships.");
        }else if(random == 8){
            message.channel.send("It’s a shame you can’t Photoshop your personality.");
        }else if(random == 9){
            message.channel.send("The smartest thing that ever came out of your mouth was a cock.");
        }else if(random == 10){
            message.channel.send("Calm down, take a deep breath and then hold it for about twenty minutes. ");
        }else if(random == 11){
            message.channel.send("You should carry around a plant to replace the oxygen you waste");
        }else if(random == 12){
            message.channel.send("I know 5 fat people, you're 4 of them.");
        }else if(random == 13){
            message.channel.send("You're the reason double doors were invented.");
        }
    }
}