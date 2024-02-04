const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])

function isPrime(a){
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            return false
        }
    }
    return true
}

let result=''
for(let i=1;i<=N;i++){
    let a=Number(input[i])
    if(a<=2){
        result+='2\n'
    }else if(a===3){
        result+='3\n'
    }else{
        while(true){
            if(isPrime(a)){
                break
            }else{
                a++
            }
        }

        result+=`${a}\n`
    }}

console.log(result)