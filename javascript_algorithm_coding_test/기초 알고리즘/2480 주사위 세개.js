let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split(' ').map(Number)

let inputSet=new Set(inputValue)

// console.log(inputSet)

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
//     같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
//     모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

if(inputSet.size===1){
    console.log(10000+inputValue[0]*1000)
}else if(inputSet.size===3){
    console.log(Math.max(...inputSet)*100)
}else{
    let cnt={}
    for(let i of inputValue){
        // console.log(i)
        if(i in cnt){
            cnt[i]+=1
            console.log(1000+i*100)
        }else{
            cnt[i]=1
        }
    }
}