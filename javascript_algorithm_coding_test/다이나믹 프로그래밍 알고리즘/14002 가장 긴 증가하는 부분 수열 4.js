const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')


let N=Number(input[0])
let arr=input[1].split(' ').map(Number)
let longestLengthList=new Array(N).fill(0)
let maxVal=-1

if(N>=1) {



    for (let i = 0; i < N; i++) {
        longestLengthList[i] = 1
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                longestLengthList[i]=Math.max(longestLengthList[i],longestLengthList[j] + 1)
            }
        }
        maxVal=Math.max(maxVal,longestLengthList[i])
    }

    console.log(maxVal)

    let longestElementArr=[]
    for(let k=N-1;k>=0;k--){
        if(longestLengthList[k]===maxVal){
            longestElementArr.push(arr[k])
            maxVal--
        }
    }



    console.log(longestElementArr.reverse().join(' '))
}
