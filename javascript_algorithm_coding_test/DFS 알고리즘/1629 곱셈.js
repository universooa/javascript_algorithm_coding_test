fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [A,B,C]=input[0].split(' ').map(Number)
result=multiply(A,B,C)
// console.log((2147483647).toExponential())
function multiply(A,B,C){
    A=BigInt(A)
    C=BigInt(C)
    if(B===1){
        return A%C
    }
    let half=multiply(A,Math.floor(B/2),C)

    if(B%2===1){
        result=(((half*half)%C)*(A%C))%C
    }else{
        result=(half*half)%C
    }

    return result

}

console.log(result.toString())