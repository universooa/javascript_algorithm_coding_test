const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])

function GCD(a,b){
    if(a<b){
        [a,b]=[b,a]
    }

    while(a%b!==0){
        r=a%b
        a=b
        b=r
    }
    return b
}

let arr=[Number(input[1]),Number(input[2])]
let greatestCommon=arr[1]-arr[0]

for(let i=3;i<=N;i++){
    arr.push(Number(input[i]))
    let between=Number(input[i])-Number(input[i-1])

    if(between%greatestCommon!==0){
        //둘 사이의 최대공약수를 다시 찾음
        greatestCommon=GCD(between,greatestCommon)
    }

}



let result=0

for(let i=0;i<arr.length;i++){
    let cur=arr[i]
    let next=arr[i+1]

    //기존 가로수 위치에 최대공약수를 더해서 갈 수 없으면 가로수를 심는다.
    if(i+1!==arr.length&& cur+greatestCommon!==next){
        result+=((next-cur)/greatestCommon)-1
    }
}

console.log(result)