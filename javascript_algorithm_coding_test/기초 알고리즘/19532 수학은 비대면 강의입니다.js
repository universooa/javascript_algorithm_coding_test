const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let value=input[0].split(' ').map(Number)

for(let x=-999;x<1000;x++){
    for(let y=-999;y<1000;y++){
        if(value[0]*x+value[1]*y===value[2]){
            if(value[3]*x+value[4]*y===value[5]){
                console.log(x,y)
                return
            }
        }
    }
}