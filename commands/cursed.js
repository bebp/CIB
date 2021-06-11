module.exports = {
    name: 'cursed',
    discription: 'This will send a random cursed or blursed image into chat',
    execute(message, args){
        var random = Math.floor(Math.random() * 821) + 1;
        console.log(random);
        message.channel.send({files: ["./blursed/("+ random +").jpg"]});
        message.channel.send("If this is not a cursed image please send this number ***" + random + "*** to @Rusty Shackleford#4957 on discord and say that it's a cursed image");
    }
}
