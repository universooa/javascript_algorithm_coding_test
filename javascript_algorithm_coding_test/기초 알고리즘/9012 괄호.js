const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])
let result=''

for(let i=1;i<=N;i++){
    let str=input[i]
    let cnt=0
    for(let j of str){
        if(j==='('){
            cnt++
        }else{
            cnt--
        }
        if(cnt<0){
            break
        }
    }
    if(cnt===0){
        result+='YES\n'
    }else{
        result+='NO\n'
    }
}

console.log(result)