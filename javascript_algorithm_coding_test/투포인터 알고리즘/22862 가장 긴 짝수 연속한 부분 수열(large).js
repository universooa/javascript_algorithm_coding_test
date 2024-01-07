fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

//홀수면 넘어가기, 짝수면 head 세기, tail은 늘어나면서 짝수면 세고, 홀수면 k 남아있으면 차감하고 tail 증가시킴
// 투포인터

let [N,K]=input[0].split(' ').map(Number)
let S=input[1].split(' ').map(Number)
let skipNum=0
let result=0

for(let start=0,end=0;start<N;start++){

    while(end<N){
        if(S[end]%2===0){
            end++
        }else{
            if(skipNum===K){
                break
            }else{
                skipNum++
                end++
            }
        }
    }
    result=Math.max(result,end-start-skipNum)
    if(S[start]%2!==0){
        skipNum--
    }
}

console.log(result)