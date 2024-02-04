fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(input[0])
let arr=input[1].split(' ').map(Number)
let dpLeft=new Array(N).fill(1)
let dpRight=new Array(N).fill(1)

for(let i=1;i<N;i++){
    //나의 왼쪽에서 나보다 작은 값들을 봐서 최대 부분수열 길이 구하기
    for(let j=0;j<i;j++){
        if(arr[j]<arr[i]){
            dpLeft[i]=Math.max(dpLeft[i],dpLeft[j]+1)
        }
    }
}


for(let j=N-2;j>=0;j--){
    //나의 오른쪽에 있는 나보다 작은 값들을 봐서 최대 부분 수열 길이 구하기
    for(let k=N-1;k>j;k--){
        if(arr[k]<arr[j]){
            dpRight[j]=Math.max(dpRight[j],dpRight[k]+1)
        }
    }
}

let result=1
for(let i=0;i<N;i++){
    let subLen=dpLeft[i]+dpRight[i]-1
    if(result<subLen ){
        result=subLen
    }
}

console.log(result)