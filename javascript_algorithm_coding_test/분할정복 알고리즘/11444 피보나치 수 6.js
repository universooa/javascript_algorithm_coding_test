fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=BigInt(input[0])
let arr=[[1n,1n],[1n,0n]]
let arrSize=2
let denominator=BigInt(1000000007)

console.log((getPow(arr,N,arrSize)[0][1]).toString())

function getPow(arr,p,N){
    if(p===1n){
        for(let i=0n;i<N;i++){
            for(let j=0n;j<N;j++){
                arr[i][j]=arr[i][j]%denominator
            }
        }
        return arr
    }

    let half=p/2n

    let halfPow=getPow(arr,half,N)
    if(p%2n===1n){
        return mmult(mmult(halfPow,halfPow,N),arr,N)
    }else{
        return mmult(halfPow,halfPow,N)
    }
}

function mmult(arrA,arrB,arrSize){
    let arrC=Array.from(Array(arrSize),()=>{
        return new Array(arrSize).fill(BigInt(0))
    })

    for(let i=0n;i<arrSize;i++){
        for(let k=0n;k<arrSize;k++){
            let result=BigInt(0)
            for(let j=0n;j<arrSize;j++){
                result+=arrA[i][j]*arrB[j][k]
            }
            arrC[i][k]=result%denominator
        }
    }

    return arrC

}