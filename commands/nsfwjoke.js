module.exports = {
    name: 'nsfwjoke',
    discription: 'This command will send an NSFW joke into the channel.',
    execute(message, args){
        var random = Math.floor(Math.random() * 24) + 1;
        if(random == 1){
        message.channel.send("What was David Bowie's last hit? ||probably heroin||");
        }else if(random == 2){
            message.channel.send("What did the elephant say to the naked man? ||How do you breathe with that thing?||"); 
        }else if(random == 3){
            message.channel.send("What do you call a cheap circumcision? ||a ripoff||");
        }else if(random == 4){
            message.channel.send("What's the difference between a Boyscout and a Jew? ||The Boyscout comes home from camp||");
        }else if(random == 5){
            message.channel.send("How many Emo kids does it take to screw in a lightbulb? ||None they just sit in the dark and cry||");
        }else if(random == 6){
            message.channel.send("Why are women like KFC? ||After you’ve finished with the thigh and breasts, all you have left is a greasy box to put your bone in.||");
        }else if(random == 7){
            message.channel.send("What do you call a teenage boy who doesn’t masturbate? ||a liar||");
        }else if(random == 8){
            message.channel.send("Did you hear about the guy who died of a Viagra overdose? ||they couldn't close his casket||");
        }else if(random == 9){
            message.channel.send("What’s worse than waking up at a party and finding a penis drawn on your face? ||finding out it was traced||");
        }else if(random == 10){
            message.channel.send("What is the difference between Michael Jackson and a grocery bag? ||One is made of plastic and is dangerous for children to play with. The other is used to carry groceries.||");
        }else if(random == 11){
            message.channel.send("After death, what is the only organ in the female body which remains warm? ||My penis||");
        }else if(random == 12){
            message.channel.send("What’s black and blue and doesn’t like to have sex ||The little girl in my trunk.||");
        }else if(random == 13){
            message.channel.send("How many cops does it take to push a black guy down a flight of stairs? ||None he fell||");
        }else if(random == 14){
            message.channel.send("Race car backwards is race car but race car sideways is how Paul walker died");
        }else if(random == 15){
            message.channel.send("What’s the difference between 6 million dollars and 6 million Jews? ||I give a shit when I lose 6 million dollars.||");
        }else if(random == 16){
            message.channel.send('A woman has just delivered a baby. The nurse who caught it hurls it against the wall. Bones crumble. The mother screams. Then the nurse opens a window and hurls the broken baby to the ground. Splat! The mother cries out "You bitch! You killed my baby! The nurse replies, “April Fools: It was born dead."');
        }else if(random == 17){
            message.channel.send(`My girlfriend tried to break up with me the other day, she says "I can't see you any more, my friend told me you're a pedophile". I told her, "Wow, that's a pretty big word for a five year old".`);
        }else if(random == 18){
            message.channel.send("What did the Chinese parents name their retarded baby? ||Som-ting-wong||");
        }else if(random == 19){
            message.channel.send("Why don't black people go on cruises? ||They're not falling for that one again.||");
        }else if(random == 20){
            message.channel.send("How many feminists does it take to change a lightbulb? ||None, feminists can’t change anything.||");
        }else if(random == 21){
            message.channel.send("What’s the worst part about being a black jew? ||sitting in the back of the oven.||");
        }else if(random == 22){
            message.channel.send("Whats the difference between a black man and an elevator? ||an elevator can raise a family of four.||");
        }else if(random == 23){
            message.channel.send("Who are the fastest readers in history? ||The 9-11 jumpers, they read over 100 stories in less than a minute!||");
        }else if(random == 24){
            message.channel.send("How do you fit three gays on one barstool? ||turn it upside down||");
        }
    }
}