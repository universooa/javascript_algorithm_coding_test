const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

function isPrime(N){
    for(let i=2;i<=Math.floor(Math.sqrt(N));i++){
        if(N%i===0){
            return false
        }
    }
    return true
}

let tc=Number(input[0])
let answer=''

for(let i=1;i<=tc;i++){
    let result=0
    let n=Number(input[i])
    let idx=n-2
    // n 보다 작은 소수를 찾는다. 1은 소수가 아님
    // n-1이 소수라면 나머지 1을 더해야 n 이 되는데
    //소수의 합이라고 했는데 1은 소수가 아니므로 n-2부터 찾아줌

    while(true){

        if(n/2 >idx){ // n의 반보다 작으면 중복이라 확인할 필요 없음
            break
        }
        if(isPrime(idx)){
            let remainder=n-idx
            if(isPrime(remainder)){
                result++
                // n보다 작은 소수를 찾았으면 소수 쌍이 있는 것
                // 뺀 나머지도 소수인지 확인해야함

            }
        }

        idx-- // 지금 거보다 작은 소수를 찾음
    }

    answer+=`${result}\n`

}

console.log(answer)