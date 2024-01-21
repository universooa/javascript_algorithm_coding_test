const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arr=[]
let res=1e9

for(let i=1;i<=N;i++){
    arr.push(input[i].split(''))
}

function makeCheckBoard(topX,bottomX,leftY,rightY,tcCase){
    let point=tcCase
    let elem=[point,point==='B'?'W':'B']
    let idx=0
    let cnt=0
    for(let i=topX;i<bottomX;i++){
        for(let j=leftY;j<rightY;j++){
            if(arr[i][j]!==elem[idx]){ //체스판으로 만들어야하면 칠해줌..
                cnt++
            }
            idx=(idx+1)%2
        }
        idx=(idx+1)%2 //다음줄로 갈때는 마지막 열과 같은 색
    }
    return cnt //칠해야하는 값
}

for(let i=0;i<N;i++){ //8x8 체스판을 만든다.
    let topX=i
    let bottomX=i+8
    if(bottomX>N){
        break
    }
    for(let j=0;j<M;j++){
        let leftY=j
        let rightY=j+8
        if(rightY>M){
            break
        }
        let tcCase=['B','W'] //맨 위가 B일때, W일때 나올 수 있는 결과가 다름
        for(let tc=0;tc<2;tc++){
            res=Math.min(res, makeCheckBoard(topX,bottomX,leftY,rightY,tcCase[tc]))

        }

    }
}

console.log(res)