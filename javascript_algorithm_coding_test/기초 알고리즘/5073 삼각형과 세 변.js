const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

for(let i=0;i<input.length-1;i++){

    let inStr=input[i].split(' ').map(Number)
    let set=new Set()

    for(let tmp of inStr){
        set.add(tmp)
    }

    let maxSide=Math.max(...inStr) // 가장 긴 변 구하기
    let maxIdx=inStr.indexOf(maxSide) //가장 긴 변의 인덱스 구하기

    let others=inStr.filter((v,i)=>{
        return i!==maxIdx
    }).reduce((a,c)=>{
        return a+c
    },0)

    if(maxSide<others){

        if(set.size===1){
            //세변의 길이가 같은 경우
            console.log('Equilateral')
        }else if(set.size===2){
            //두변의 길이가 같은 경우
            console.log('Isosceles')
        }else{
            console.log('Scalene')
        }
    }
    else{
        console.log('Invalid')
    }
}