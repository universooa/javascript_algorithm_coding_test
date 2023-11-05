fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let tcNum=Number(inputV[0])
for(let i=0;i<tcNum;i++){
    let N=Number(inputV[i+1])
    arr=new Array(N+1).fill(-1)
    arr[0]=[1,0]
    arr[1]=[0,1]
    let result=fibo(N)

    console.log(`${result[0]} ${result[1]}`)
}

function fibo(N){
    if(N===0||N===1 ) {
        return arr[N]
    }
    else if(arr[N]===-1){
        arr[N]=[fibo(N-1)[0]+fibo(N-2)[0],fibo(N-1)[1]+fibo(N-2)[1]]
    }
    return arr[N]
}