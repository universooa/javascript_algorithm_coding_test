fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(input[0])
let arr=input[1].split(' ').map(Number)
let answer=[arr[0]]

function lowerBound(value){
    let start=0
    let end=answer.length-1

    while(start<end){
        let mid=Math.floor((start+end)/2)
        if(answer[mid]<value){
            start=mid+1
        }else{
            end=mid
        }
    }

    return end
}

for(let i=1;i<N;i++){
    let idx=lowerBound(arr[i])

    if(answer[answer.length-1]<arr[i]){
        //지금까지 나온 값 중 제일 크기 때문에 마지막에 추가
        answer.push(arr[i])
    }else {
        //해당 값보다 큰 값이 있는 위치에 들어감
        answer[idx]=arr[i]
    }
}

console.log(answer.length)