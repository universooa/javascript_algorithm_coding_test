fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

function GCD(a,b){
    if(a<b){
        a,b=b,a //a가 큰 값이도록 함
    }
    while(a%b!==0){
        r=a%b
        a=b
        b=r
    }
    return b
}

function LCM(a,b){
    return (a*b)/GCD(a,b)
}

let N=Number(input[0])
let result=''
for(let i=1;i<=N;i++){
    let [a,b]=input[i].split(' ').map(Number)
    result+=`${LCM(a,b)}\n`
}

console.log(result)