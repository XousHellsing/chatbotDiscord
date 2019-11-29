/*
Ricardo Arèvalo Rodrìguez
ICO 7
CTA 1626550
*/
const {Client,RichEmbed}=require('discord.js');
const client=new Client();
client.on('ready',()=>{
        console.log(`im alive:${client.user.tag}`);
        if(client.user.presence.status==='dnd'){
            console.log('El bot está ivernando :v',client.user.presence.status);
        }
        else{
            console.log('Aqui estoy perro');
        }
        const testChannel= client.channels.find(channel=>channel.name==='Canal uaemex');
        console.log('Satanael is here');
    });
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

client.on('message',async message=>{
    console.log(message);
     sleep(1000);
    if(message.content==='ping'){
        message.reply('pong');
    }
    if(message.content==='hola'){
        message.channel.send(`hshshshshshshs ${message.author}`)
    }
    if(message.content.includes('puto')){
        message.channel.send(`Camara ${message.author} bajele de huevos pinche puto`);
    };
    if(message.content.includes('Xous')){
        message.channel.send(`https://github.com/XousHellsing`);
    };
    if(message.content==='!pretty'){
        const embed= new RichEmbed()
            .setTitle('Pretty Message')
            .setColor('#F46611')
            .setAuthor('Xous','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCoMgEgdPQgZxeT1PG5Ya-F9vTHiqJ_BUwCBPehACSOQEI73T1')
        message.channel.send(embed);
    };
     if(message.content==='!clear'){
        const fetched= await message.channel.fetchMessages({limit:100});
        message.channel.bulkDelete(fetched);
        console.log('messages deleted')
    };
});


client.login('NjUwMDA0ODM4MjY0MDc4MzU2.XeFCQQ.hLx92sCyYtGBtV9DdLKXjP-2dKA');
