const Nuggies = require("nuggies");
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const options = new Nuggies.dropdownroles().addrole({
        label: 'dropdown role label',
        role: 'role id',
        emoji: 'emoji id'
    }).addrole({
        label: 'dropdown role label',
        role: 'role id',
        emoji: 'emoji id'
    });

    Nuggies.dropdownroles.create({
        message: role message,
        role: options, /*dropdownroles constructor*/ 
        content: new Discord.MessageEmbed().setTitle('Click to get role').setDescription('role').setColor("BLUE"),
        channelID: message.channel.id
    });
}

module.exports.config = {
    name: "dropdown",
    aliases: []
}
