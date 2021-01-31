const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', ()=>{
    console.log("봇이 준비되었습니다")
})
client.on('message',msg=>{
    if(msg.content === "안녕하세요"){
        msg.reply("어서오세요. 시온왕국에 오신것을 환영합니다.")
    }
})

client.on('message',msg=>{
    if(msg.content === "보노보노"){
        msg.reply("https://whom-this.com/heo/ZclTC6NnQRs.jpeg")
    }
})

client.on('message',msg=>{
    if(msg.content === "완벽히 이해했어"){
        msg.reply("https://blog.kakaocdn.net/dn/bVK5Rq/btqEBO2rTHu/piMxC3N6Ot6LwyBf1boLG1/img.jpg")
    }
})

client.on('message',msg=>{
    if(msg.content === "연애혁명"){
        msg.reply("공주영♥왕자림")
    }
})

client.on('message',msg=>{
    if(msg.content === "시온왕국"){
        msg.reply("시온왕국 건국일 :2020.01.25 왕 : 시스템 , 김하울")
    }
})

client.on('message',msg=>{
    if(msg.content === "쟈딤쟈딤은"){
        msg.reply("잘생겼다")
    }
})

client.login('ODA1MTAzMTU3NzQxODc5MzY2.YBWAvg.R52Uua7UvecuDv1eqdPBmbwHa6U')