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

let [a,b]=input[0].split(' ').map(Number)
let [c,d]=input[1].split(' ').map(Number)

let leastCommon=LCM(b,d) //최소공배수 구하기
let multiplyA=leastCommon/b
let multiplyC=leastCommon/d

a*=multiplyA //분수끼리 합치기 위해 분모를 통일해줘야함
// 분자에 분모들의 최소공배수 곱해줌
c*=multiplyC

let numerator=a+c
let denominator=leastCommon

let greatestCommon=GCD(numerator,denominator) //분모,분자의 최대공약수 구해서 나누기

console.log(`${numerator/greatestCommon} ${denominator/greatestCommon}`)
//기약 분수 됨(더 이상 약분되지 않는 분수)


