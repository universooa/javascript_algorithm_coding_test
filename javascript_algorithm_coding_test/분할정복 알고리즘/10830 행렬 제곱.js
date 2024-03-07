fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,b]=input[0].split(' ').map(Number)

let arr=[]
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
}

let denominator=1000

let arrC=getPow(arr,b,N)

let result=''
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        result+=`${arrC[i][j]} `
    }
    result.trimEnd()
    result+=`\n`
}

console.log(result)

function getPow(arr,b,N){
    if(b===1){
        for(let i=0;i<N;i++){
            for(let j=0;j<N;j++){
                arr[i][j]=arr[i][j]%denominator
            }
        }
        return arr
    }

    let half=Math.floor(b/2)
    let halfPow=getPow(arr,half,N)
    let arrC
    if(b%2===1){
        arrC=mmult(mmult(halfPow,halfPow,N),arr,N)
    }else{
        arrC=mmult(halfPow,halfPow,N)
    }


    return arrC

}


function mmult(arrA,arrB,N){
    let arrC=Array.from(Array(N),()=>{
        return new Array(N).fill(0)
    })

    for(let i=0;i<N;i++){
        for(let k=0;k<N;k++){
            let result=0
            for(let j=0;j<N;j++){
                result+=arrA[i][j]*arrB[j][k]
            }
            arrC[i][k]=result%denominator
        }
    }
    return arrC
}