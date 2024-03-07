fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,K]=input[0].split(' ').map(Number)
let prime=BigInt(1000000007)

function factorial(N){
    let val=BigInt(1)
    for(let i=2n;i<=BigInt(N);i++){
        val=(val*i)%prime
    }
    return val
}

let numerator=factorial(N)

let denominator=factorial(N-K)*factorial(K)%prime

console.log(((numerator*divideConquer(denominator,prime-2n))%prime).toString())

function divideConquer(a,n){
    a=BigInt(a)
    n=BigInt(n)

    if(n===1n){
        return a%prime
    }

    let half=divideConquer(a,n/2n)

    if(n%2n===1n){
        return ((half*half)%prime)*a%prime
    }else{
        return half*half%prime
    }

}
