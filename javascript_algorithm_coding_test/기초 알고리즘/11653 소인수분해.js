const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N= Number(input[0])

if(N===2||N===3){
    console.log(N)
    return
}


let result=''
for(let j=2;j<=Math.floor(Math.sqrt(N));j++){
    if(N%j===0){
        N/=j
        result+=`${j}\n`
        j--
    }
}

if(N!==1){
    result+=`${N}\n`
}
console.log(result)