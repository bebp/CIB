module.exports = {
    name: 'nudes',
    discription: 'This will send a random nude',
    execute(message, args){
        if (message.channel.nsfw === true){

        var hmm = Math.floor(Math.random() * 6) + 1;
        if(hmm == 1 || hmm == 3 || hmm == 4 || hmm ==6){
            var jpg = Math.floor(Math.random() * 218) + 1;
            message.channel.send({files: ["./boobs/("+ jpg + ").jpg"]})
            message.channel.send("If this is not a nude please send this number ***" + jpg + "*** to @Rusty Shackleford#4957 on discord and say that it's not boobs.");
        }else if(hmm == 2 || hmm == 5){
            var mp4 = Math.floor(Math.random() * 19) + 1;
            message.channel.send({files: ["./boobs/("+ mp4 + ").mp4"]})
            message.channel.send("If this is not a nude please send this number ***" + mp4 + "*** to @Rusty Shackleford#4957 on discord and say that it's not boobs.");

            }
        }else if(message.channel.nsfw == false){
            message.channel.send("This command can only be used in an NSFW channel.");
        
        }else{
            var hmm = Math.floor(Math.random() * 6) + 1;
            if(hmm == 1 || hmm == 3 || hmm == 4 || hmm ==6){
                var jpg = Math.floor(Math.random() * 218) + 1;
                message.channel.send({files: ["./boobs/("+ jpg + ").jpg"]})
                message.channel.send("If this is not a nude please send this number ***" + jpg + "*** to @Rusty Shackleford#4957 on discord and say that it's not boobs.");
            }else if(hmm == 2 || hmm == 5){
                var mp4 = Math.floor(Math.random() * 21) + 1;
                message.channel.send({files: ["./boobs/("+ mp4 + ").mp4"]})
                message.channel.send("If this is not a nude please send this number ***" + mp4 + "*** to @Rusty Shackleford#4957 on discord and say that it's not boobs.");
            }
        }
    }
}
