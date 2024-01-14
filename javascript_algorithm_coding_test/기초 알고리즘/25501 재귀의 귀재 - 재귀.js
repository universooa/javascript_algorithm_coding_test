const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let callTotal=0
function isPalindrome(s,l,r){
    callTotal++
    if(l>=r){
        return 1
    }
    if(s[l]!==s[r]){
        return 0
    }
    return isPalindrome(s,l+1,r-1)
}

let result=''
for(let i=1;i<=N;i++){
    callTotal=0
    let res=isPalindrome(input[i],0,input[i].length-1)

    result+=`${res} ${callTotal}\n`
}

console.log(result)