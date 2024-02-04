fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

function eratos(n){
    primeArr[0]=false
    primeArr[1]=false
    for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
        if(primeArr[i]){
            for(let j=i*i;j<=n;j+=i){
                primeArr[j]=false
            }
        }
    }
}

let tc=Number(input[0])
let m=Math.max(...input)
primeArr=new Array(m+1).fill(true)
eratos(m) // 소수구하기

let answer=''
for(let i=1;i<=tc;i++){
    let n=Number(input[i])
    let result=0
    for(let j=2;j<=Math.floor(n/2);j++){
        if(primeArr[j] && primeArr[n-j]){ // 둘다 소수인지 확인
            result++
        }
    }
    answer+=`${result}\n`
}


console.log(answer)