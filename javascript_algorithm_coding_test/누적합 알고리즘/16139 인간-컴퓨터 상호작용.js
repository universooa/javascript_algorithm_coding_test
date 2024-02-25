const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let S=input[0]
let q=Number(input[1])
let sumArr=Array.from(Array(S.length+1),()=>{
    return new Array(26).fill(0) //console.log('z'.charCodeAt(0)-'a'.charCodeAt(0)+1) 알파벳 26개
})

for(let i=0;i<S.length;i++){
    let code=S[i].charCodeAt(0)-'a'.charCodeAt(0)

    for(let j=0;j<26;j++){
        if(code===j){
            sumArr[i+1][j]=sumArr[i][j]+1 //각 문자열 자리에서 알파벳의 누적합 구함
        }else{
            sumArr[i+1][j]=sumArr[i][j]
        }
    }
}

let result=''

for(let i=2;i<=q+1;i++){
    let [a,l,r]=input[i].split(' ')
    let code=a.charCodeAt(0)-'a'.charCodeAt(0)

    result+=`${sumArr[Number(r)+1][code]-sumArr[Number(l)][code]}\n`

}


console.log(result)