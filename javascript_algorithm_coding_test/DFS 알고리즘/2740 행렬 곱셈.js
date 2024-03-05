fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arrA=[]
let arrB=[]

for(let i=1;i<=N;i++){
    arrA.push(input[i].split(' ').map(BigInt))
}

let [ME,K]=input[N+1].split(' ').map(Number)

for(let j=N+2;j<input.length;j++){
    arrB.push(input[j].split(' ').map(BigInt))
}
let arrC=Array.from(Array(N),()=>{
    return new Array(K).fill(BigInt(0))
})


for(let i=0;i<N;i++){
    for(let k=0;k<K;k++){
        let result=BigInt(0)
        for(let j=0;j<M;j++){
            result+=arrA[i][j]*arrB[j][k]
        }
        arrC[i][k]=result
    }

}

let result=''
for(let i=0;i<N;i++){
    result+=`${arrC[i].join(' ')}\n`
}

console.log(result)