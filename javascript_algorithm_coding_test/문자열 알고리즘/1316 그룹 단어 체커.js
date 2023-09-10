let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

const numOfWords=inputV.shift()
let cnt=0

for(let word of inputV){
    let dict={}
    let charV=word.split('')
    let prev=''
    let groupWord=true
    for(let ch=0;ch<charV.length;ch++){
        let keyV=charV[ch]
        if(keyV in dict){
            //그룹 단어 아님
            groupWord=false
            break
        }else{
            dict[keyV]=1
            while(ch<charV.length-1 && charV[ch+1]===keyV){
                ch+=1
            }
        }
    }
    if(groupWord){
        cnt+=1
    }
}

console.log(cnt)