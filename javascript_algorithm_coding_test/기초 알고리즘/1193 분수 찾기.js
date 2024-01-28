const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')
let N=Number(input[0])

let idx=1
let sum=0

while(true){
    if(sum+idx<N){
        sum+=idx
        idx++
    }else{
        break
    }

}

let start=sum+1
let x=0
let y=0

if(idx%2===0){
    //위 오른쪽부터 시작... (0,y)
    x=0
    y=idx-1

    while(true){

        sum++
        if(sum===N){
            console.log(`${x+1}/${y+1}`)
            break
        }
        x++
        y--
    }
}else{
    //왼쪽 아래부터 시작 (x,0)
    x=idx-1
    y=0

    while(true){
        sum++
        if(sum===N){
            console.log(`${x+1}/${y+1}`)
            break
        }
        x--
        y++
    }
}