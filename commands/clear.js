module.exports = {
    name: "clear",
    description: "Clears messages",
        run: async(client, message, args) => {
            async function clear() {
                message.delete();

                var purge = Number(args[1])

                if(isNaN(purge)) {
                    message.channel.send(`Please input a number.`)
                }
                const fetched = await message.channel.messages.fetch({limit: purge});
                console.log(fetched.size + `messages found.`);

message.channel.bulkDelete(fetched)
message.channel.send(`I have deleted `+ fetched + `messages`);
            }
            clear();
        }
    }