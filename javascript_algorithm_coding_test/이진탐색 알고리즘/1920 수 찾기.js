fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
arr=input[1].split(' ').map(Number)
arr.sort((a,b)=>a-b)

function binarySearch(N){
    let start=0
    let end=arr.length-1

    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]===N){
            return mid
        }else if(arr[mid]<N){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return -1
}

let tc=Number(input[2])
let tcs=input[3].split(' ').map(Number)
let result=[]

for(let i=0;i<tc;i++){
    let v=binarySearch(tcs[i])
    if(v===-1){
        result.push(0)
    }else{
        result.push(1)
    }
}

console.log(result.join('\n'))