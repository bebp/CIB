module.exports = {
    name: 'sfwjoke',
    discription: 'This command will send an SFW joke into the channel.',
    execute(message, args){
        var random = Math.floor(Math.random() * 24) + 1;
        if(random == 1){
        message.channel.send("What do dentists call their x-rays? ||Tooth pics||");
        }else if(random == 2){
            message.channel.send("Did you hear about the first restaurant to open on the moon? ||It had great food, but no atmosphere.||"); 
        }else if(random == 3){
            message.channel.send("What did one ocean say to the other ocean? ||Nothing, it just waved.||");
        }else if(random == 4){
            message.channel.send("Do you want to hear a construction joke? ||Sorry I'm still working on it||");
        }else if(random == 5){
            message.channel.send("Did you hear about the fire at the circus? ||It was in tents!||");
        }else if(random == 6){
            message.channel.send("What’s the difference between a hippo and a zippo? ||One is really heavy and the other is a little lighter.||");
        }else if(random == 7){
            message.channel.send("What does a nosey pepper do? ||It gets jalapeño business.||");
        }else if(random == 8){
            message.channel.send("Why should you never trust stairs? ||They're always up to something.||");
        }else if(random == 9){
            message.channel.send("When does a joke become a ‘dad’ joke? ||When it becomes apparent.||");
        }else if(random == 10){
            message.channel.send("Where does a waitress with only one leg work? ||IHOP||");
        }else if(random == 11){
            message.channel.send("What does a house wear? ||address||");
        }else if(random == 12){
            message.channel.send("Why are toilets always so good at poker? ||They always get a flush||");
        }else if(random == 13){
            message.channel.send("Why is Peter Pan always flying? ||Because he neverlands||");
        }else if(random == 14){
            message.channel.send("Two windmills are standing on a wind farm. One asks, ‘What’s your favorite kind of music?’ ||The other replies, ‘I’m a big metal fan.’||");
        }else if(random == 15){
            message.channel.send("The first rule of the Alzheimer’s club is… ||Wait, where are we again?||");
        }else if(random == 16){
            message.channel.send("How does NASA organize a party? ||They planet||");
        }else if(random == 17){
            message.channel.send("What’s the best thing about Switzerland? ||I don't know but the flag is a big plus!||");
        }else if(random == 18){
            message.channel.send("You know, it was so cold in D.C. the other day, I saw a politician with his hands in his own pockets.");
        }else if(random == 19){
            message.channel.send("How many tickles does it take to get an octopus to laugh? ||Ten tickles||");
        }else if(random == 20){
            message.channel.send("Why doesn’t Dracula have any friends? ||Because  he's a pain in the neck!||");
        }else if(random == 21){
            message.channel.send("My teachers told me I’d never amount to much since I procrastinate so much. ||I told them, 'just you wait!'");
        }else if(random == 22){
            message.channel.send('Why were they called the “dark ages?” ||Because there were a lot of knights||');
        }else if(random == 23){
            message.channel.send("I can never take my dog to the park because the ducks keep trying to bite him. ||I guess that’s what I get for buying a pure bread dog.||");
        }else if(random == 24){
            message.channel.send("You know why you never see elephants hiding up in trees? ||Because they're really good at it||");
        }
    }
}