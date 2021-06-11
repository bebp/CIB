module.exports = {
    name: 'help',
    discription: 'This will show all the currently available commands and a brief description',
    execute(message, args){
        if(message.channel.type === "dm"){
        message.author.send("The current list of available commands ```<<< c!help >>> sends a DM with all the available commands \n<<< c!cursed >>> sends a random cursed image into chat. \n<<< c!insult >>> will roast you to death. \n<<< c!socials >>> gives a list of the bot creators social media accounts \n <<< c!say >>> will repeat a user message\n<<< c!nudes >>> sends a random nude into the chat\n<<< c!nsfwjoke >>> sends a random inappropriate joke into the chat.\n<<< c!sfwjoke >>> sends a random appropriate joke into the chat.\n<<< c!rps rock/paper/scissors >>> Play rock paper scissors with the bot``` ```>>>More commands coming soon!<<<``` ");
        }else{
        message.delete();
        message.author.send("The current list of available commands ```<<< c!help >>> sends a DM with all the available commands \n<<< c!cursed >>> sends a random cursed image into chat. \n<<< c!insult >>> will roast you to death. \n<<< c!socials >>> gives a list of the bot creators social media accounts \n <<< c!say >>> will repeat a user message\n<<< c!nudes >>> sends a random nude into the chat\n<<< c!nsfwjoke >>> sends a random inappropriate joke into the chat.\n<<< c!sfwjoke >>> sends a random appropriate joke into the chat.\n<<< c!rps rock/paper/scissors >>> Play rock paper scissors with the bot``` ```>>>More commands coming soon!<<<``` ");
        }
    }
}
